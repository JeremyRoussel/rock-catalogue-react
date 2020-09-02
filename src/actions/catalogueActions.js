// ./actions/catalogueActions

// Upon Promise completion, Action creator returns the 
// action type and the payload to send to reducer

import * as types from './catalogueActionTypes';

class catalogueActions {

    static loadCatalogueSuccess(catalogue) {
        return {type: types.LOAD_CATALOGUE_SUCCESS, catalogue}
    }

    static addSampleSuccess(sample) {
        return {type: types.ADD_SAMPLE_SUCCESS, sample}
    }

    static putSampleSuccess(sample) {
        return {type: types.PUT_SAMPLE_SUCCESS, sample}
    }
}

export default catalogueActions