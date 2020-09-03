// ./reducers/catalogueReducer.js

import * as types from '../actions/catalogueActionTypes';
import initialState from './initialState';

// state here is the catalogue object in global state

let catalogue = (state=initialState.catalogue, action) => {
    switch (action.type) {
        case types.LOAD_CATALOGUE_SUCCESS:
            return action.catalogue
        
        case types.ADD_SAMPLE_SUCCESS:
            return [...state, ...action.sample]
        
        case types.PUT_SAMPLE_SUCCESS:
            return [...state.filter(sample => sample.id !== action.sample[0].id),
                ...action.sample]

        default:
            return state
    }
}

export default catalogue


