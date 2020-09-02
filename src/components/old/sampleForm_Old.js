// ./components/sampleForm

import React, { Component } from 'react'

// Imported Actions to add data
import addSample from '../../actions/addSample'

// Material-UI Imports
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import SampleForm from './form'

// Connect to Redux
import {connect} from 'react-redux'

class SampleView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sample: {
                id: 0,
                name: '',
                project: '',
                user: 0,
                field: '',
                well: '',
                thumbnail: ''
            },
            add: true,
            edit: false
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onEdit = e => {
        e.preventDefault()
        this.setState({edit: true})
    }

    submitSample = e => {
        e.preventDefault()

        let sampleBody = JSON.stringify({
            name: '',
            project: '',
            user: 0,
            field: '',
            well: ''
        })

        this.props.dispatch(addSample(sampleBody))
        this.props.toggle()
    }

    componentDidMount(){

        // if sample exists in props and isn't the add key, update state and reset add key
        let id = this.props.match.params.id

        

        if (id !== 'add'){
            let sample = this.props.location.state.sample

            this.setState({sample: sample})
            this.setState({add: false})

        }
    }

    render() {

        // retrieve sample id from path, or id=add to indicate new form should be made instead
        const edit = this.state.edit
        


        if (this.state.sample.id !== 0){

            return (
                <>
                    
                    <div>
                        SampleForm: Route at {this.state.sample.id}
                    </div>
                    <br />
                    <div>
                        <SampleForm id={this.state.sample.id} />
                    </div>
                </>
        )}

        // Sample Add Form
        else {
            return (
                <>
                    <Grid item xs={12} >
                        <Paper>
                            <form noValidate autoComplete="off">
                                <Typography variant="body1" component="h2" style={{margin: 10}}>
                                    <br />Sample Information
                                </Typography>
                                <div>
                                    <TextField
                                        disabled={edit}
                                        required
                                        id="sample-name"
                                        name="name"
                                        label="Sample Name"
                                        defaultValue=""
                                        variant="outlined"
                                        style={{margin: 10}}
                                    />
                                    <TextField
                                        disabled={edit}
                                        id="project"
                                        name="project"
                                        label="Project"
                                        defaultValue=""
                                        variant="outlined"
                                        style={{margin: 10}}
                                    />
                                    <TextField
                                        disabled={edit}
                                        id="field"
                                        name="field"
                                        label="Field"
                                        defaultValue=""
                                        variant="outlined"
                                        style={{margin: 10}}
                                    />
                                    <TextField
                                        disabled={edit}
                                        id="well"
                                        name="well"
                                        label="Well"
                                        defaultValue=""
                                        variant="outlined"
                                        style={{margin: 10}}
                                    />
                                    <TextField
                                        disabled={edit}
                                        id="thumbnail"
                                        name="thumbnail"
                                        label="Thumbnail"
                                        defaultValue=""
                                        variant="outlined"
                                        style={{margin: 10}}
                                    />
                                </div>
                            </form>
                        </Paper>
                    </Grid>
                </>
            )
        }

    }
}

export default connect()(SampleView)
