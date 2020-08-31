// ./components/SampleCard.js

// React Import
import React, { Component } from 'react'

// Router Component
import { Link as RouterLink } from 'react-router-dom';

// Material-UI Imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//Redux Connection
import {connect} from 'react-redux'

// ./components/SampleCard.js

class SampleCard extends Component {
    render(){

        let sample = this.props.sample

        if (sample !== undefined) {
            return (
                <React.Fragment>
                    <Card >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt={sample.name}
                            height="200"
                            image={sample.thumbnail}
                            title={sample.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {sample.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" component={RouterLink} to="/">
                                View Details
                            </Button>
                        </CardActions>
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