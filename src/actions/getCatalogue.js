// ./actions/getCatalogue.js

// This is an action creator for fetching sample data from our catalogue database,
// used in initialization

import catalogueAPI from '../api/catalogueAPI';
import catalogueActions from './catalogueActions';


// catalogue is an array here
let getCatalogue = () => {
    return function(dispatch) {
        return catalogueAPI.getAllSamples().then(catalogue => {
            dispatch(catalogueActions.loadCatalogueSuccess(catalogue))
        }).catch(error => {
            throw(error)
        })
    }
}

export default getCatalogue

// when getAllSamples returns a completed Promise, the catalogue json is sent to the dispatch function
