// ./reducers/catalogueReducer.js

import * as types from '../actions/catalogueActionTypes';
import initialState from './initialState';

let catalogue = (state=initialState.catalogue, action) => {
    switch (action.type) {
        case types.LOAD_CATALOGUE_SUCCESS:
            return action.catalogue
        
        default:
            return state
    }
}

export default catalogue


