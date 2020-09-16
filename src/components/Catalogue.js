// ./components/Catalogue.js

import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom'

// Material-UI imports
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Redux Imports
import {connect} from 'react-redux'

// Prop type Checking and defaults
import PropTypes from 'prop-types'

// Component Imports
import SampleCard from './SampleCard'

class Catalogue extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modal: false
        }
    }


    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    render() {

        // order samples by sampleID
        let sampleOrder = this.props.catalogue.sort((a,b) => a.sampleID - b.sampleID)
        // map catalogue to list of card components
        let samples = sampleOrder.map(item => {
            return  <Grid item xs={12} md={4} lg={3} key={item.id}> <SampleCard sample={item} /> </Grid>
        })

        let localURL = "http://ec2-18-191-206-123.us-east-2.compute.amazonaws.com/"
        // let localURL = "http://localhost:3001/"


        return (
            <React.Fragment>
                               
                {/* Add New Sample Component */}

                <Grid item xs={12} md={4} lg={3} key="addSample">
                    <Card >
                        <CardActionArea component={RouterLink} to="/sample/add">
                            <CardMedia
                            component="img"
                            alt="Add New Sample"
                            height="200"
                            image={localURL + "null.png"}
                            title="Add New Sample"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Add New Sample
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* list of card components */}
                {samples}

            </React.Fragment>
        );
    }
}

Catalogue.propTypes = {
    catalogue: PropTypes.array.isRequired
}

Catalogue.defaultProps = {
    catalogue: []
}

const mapStateToProps = (state, ownProps) => {
    return {
      catalogue: state.catalogue
    }
  }

export default connect(mapStateToProps)(Catalogue)
