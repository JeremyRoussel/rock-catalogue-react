// ./components/form.js

import React, {useEffect, useState} from 'react'

// Route Hooks
import { useRouteMatch, useHistory } from 'react-router-dom'

// Redux Hooks
import {useSelector, useDispatch} from 'react-redux'

// Action Creators
import addSample from '../actions/addSample'
import putSample from '../actions/putSample'

// Material-UI Components and Hook
import {makeStyles} from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Initialize Sample Information
const initSample = { field: "", id: 0, name: "", project: "", thumbnail: "", user: 1, well: "" }

// Create Styles Hook for Material-UI
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },

  }));

function SampleForm() {

    // invoke Style Hook, create combined class
    const classes = useStyles();

    // Use History to allow navigation when sending a new sample
    let history = useHistory();

    // Create state for component
    const [isLoading, setIsLoading] = useState(true)
    const [localSample, setLocalSample] = useState(initSample)
    const [edit, setEdit] = useState(true)

    // Create form updater with onChange to track updates to form values
    const onChange = e => {
        setLocalSample({...localSample, [e.target.name]: e.target.value})
    }

    // Define dispatch
    const dispatch = useDispatch()

    // Identify current sample
    let match = useRouteMatch("/sample/:id");

    // Pull sample information from global state
    const sample = useSelector(state => state.catalogue.find(item => {
        return (item.id.toString() === match.params.id)
    }))

    // Allow/prevent edits with Edit Button
    const allowEdit = e => {
        e.preventDefault()
        setEdit(!edit)
    }

    // Submit New Sample / Put existing Sample
    const submitAction = e => {
        e.preventDefault()

        console.log(localSample)

        if (localSample.id === 0){
            let submitBody = JSON.stringify(localSample)
            dispatch(addSample(submitBody))
            history.push("/")}
        else {
            let submitBody = JSON.stringify(localSample)
            console.log(submitBody)
            dispatch(putSample(submitBody))
        }
    }

    // On Load or state update, modify state conditions
    useEffect(() => {
        
        // if sample was found, set loading to false and load store data into local state
        if (sample !== undefined) {
            setIsLoading(false)
            setLocalSample(sample)
        }
        // if instead we are adding a sample, set edit to false to allow form entry
        else if (match.params.id === "add") {
            setIsLoading(false)
            setEdit(false)
        }
        // re-render on changes to sample, or match.params.id (second is unlikely?)
    }, [sample, match.params.id])

    // conditional render of loading, which should be replaced by the form in all cases
    return isLoading? (
        <div id="Loading">
            Loading Error?
        </div>
    ) : (
        <> 
            <Grid item xs={12} >
                <Paper className={classes.paper} >
  
                    <Typography variant="body1" component="h2" align="center" >
                        Sample Information
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} >
                <Paper className={classes.paper} >
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={submitAction} >
                        <div >
                            <TextField
                                disabled={edit}
                                required
                                id="sample-name"
                                name="name"
                                label="Sample Name"
                                variant="outlined"
                                value={localSample.name}
                                onChange={onChange}
                            />
                            <TextField
                                disabled={edit}
                                id="project"
                                name="project"
                                label="Project"
                                variant="outlined"
                                value={localSample.project}
                                onChange={onChange}
                            />
                            <TextField
                                disabled={edit}
                                id="field"
                                name="field"
                                label="Field"
                                variant="outlined"
                                value={localSample.field}
                                onChange={onChange}
                            />
                            <TextField
                                disabled={edit}
                                id="well"
                                name="well"
                                label="Well"
                                variant="outlined"
                                value={localSample.well}
                                onChange={onChange}
                            />
                            <TextField
                                disabled={edit}
                                id="thumbnail"
                                name="thumbnail"
                                label="Thumbnail"
                                variant="outlined"
                                value={localSample.thumbnail}
                                onChange={onChange}
                            />
                        </div>
                        <div>
                            <Button type="submit" color="secondary">Upload</Button>
                            <Button onClick={allowEdit}  >Edit</Button>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </>
    )
}

export default SampleForm

