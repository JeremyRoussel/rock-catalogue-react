// ./components/ImageCards.js

import React, {useEffect, useState} from 'react'
import SampleImage from './SampleImage'

// Route Hooks
// import { useRouteMatch, useHistory} from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

// Redux Hooks
// import {useSelector, useDispatch} from 'react-redux'

// Action Creators


// Material-UI Components and Hook
import {makeStyles} from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { DropzoneArea } from 'material-ui-dropzone'

// Initialize Sample Information
const initImages = []

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

function ImageCards() {

    // invoke Style Hook
    const classes = useStyles();

    // Use History to allow navigation when sending a new sample
    // let history = useHistory();

    // Create state for component
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(true)
    const [sampleImages, setSampleImages] = useState(initImages)


    // Define dispatch
    // const dispatch = useDispatch()

    // Identify current sample
    let matchID = useRouteMatch("/sample/:id").params.id;

   
    // Create Array of JSX Card Elemnts of the images
    const imgElementArray = sampleImages.map(item => {
        return  <Grid item xs={12} md={4} lg={3} key={item.id}> <SampleImage imageItem={item} /> </Grid>
    })

    // useEffect to fetch image data from API!
    useEffect(() => {
        if (matchID !== 'add'){
        let fetchURL = 'http://localhost:3001/images/' + matchID
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)
            try {
                const response = await fetch(fetchURL)
                const result = await response.json()

                if (!result.dataExists){
                    setSampleImages(result)}
                // console.log(result)
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false);
        }
        fetchData();
      }}, [matchID])

    // Upload Function
    // const fileAdded = () => {
    //     const fetchData = async () => {
    //         let formData = new FormData()
    //         formData.append('image', file)
    //         let response = await fetch('http://localhost:3001/upload', {
    //             method: "POST",
    //             body: {formData}
    //         })
    //         let result = await response.json()
    //         console.log(result)
    //         history.push("/sample/"+matchID)
    //     }
    //     fetchData()
    // }

    // conditional render for loading, which should be replaced by the images in all cases execpt 'add'
    return (isLoading && isError && (matchID === 'add'))? (
        <>
            
        </>
    ) : ( 
        <>
            <Grid item xs={12} >
                <Paper className={classes.paper} >
                    <Typography variant="body1" component="h2" align="center" >
                        Thin Sections
                    </Typography>
                </Paper>
            </Grid>

            {imgElementArray}

            {/* Image Upload Element */}
        
            <Grid item xs={12} >
                <Paper className={classes.paper} >
                    <Typography variant="body1" component="h2" align="center" >
                        <DropzoneArea
                            acceptedFiles={['image/*']}
                            dropzoneText={"Drag and drop an image here or click"}
                            maxFileSize={30000000}
                            filesLimit={1}
                            onDrop={(file) => {
                                console.log(`file added:`, file)
                                // fileAdded(file)
                            }}
                        />
                    </Typography>
                </Paper>
            </Grid>
            

        </>
    )
}

export default ImageCards

