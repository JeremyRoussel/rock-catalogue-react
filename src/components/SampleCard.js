// ./components/SampleCard.js

// React Import
import React, { Component } from 'react'

// Router Component
import { Link as RouterLink } from 'react-router-dom';

// Material-UI Imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//Redux Connection
import {connect} from 'react-redux'

// ./components/SampleCard.js

class SampleCard extends Component {
    render(){

        let sample = this.props.sample

        if (sample !== undefined) {

            let linkObject = {
                pathname: '/sample/' + sample.id,
                state: {sample: sample}
            }

            let localURL = "http://ec2-18-191-206-123.us-east-2.compute.amazonaws.com/thin-sections/"
            // let localURL = "http://localhost:3001/thin-sections/"

            let imgURL = localURL + sample.thumbnail + '.png'


            return (
                <React.Fragment>
                    <Card >
                        <CardActionArea component={RouterLink} to={linkObject}>
                            <CardMedia
                            component="img"
                            alt={sample.name}
                            height="200"
                            image={imgURL}
                            title={sample.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {sample.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </React.Fragment>
            )}
        else {
            return (
                <>
                </>
            )
        }

    }
}

export default connect()(SampleCard)