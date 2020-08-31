// ./components/Catalogue.js

import React, {Component} from 'react';

// Material-UI imports
import Grid from '@material-ui/core/Grid'

// Redux Imports
import {connect} from 'react-redux'

// Prop type Checking and defaults
import PropTypes from 'prop-types'

// Component Imports
import SampleCard from './SampleCard'

// ./components/Catalogue.js

class Catalogue extends Component {

    render() {

        // map catalogue to list of card components
        const samples = this.props.catalogue.map(item => {
            return  <Grid item xs={12} md={4} lg={3} key={item.id}> <SampleCard sample={item} /> </Grid>
        })

        return (
            <React.Fragment>
                 
                {/* list of card components */}
                {samples}
                
                {/* Add New Sample Component */}

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
