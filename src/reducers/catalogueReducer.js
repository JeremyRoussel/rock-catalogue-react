import * as types from '../actions/catalogueActionTypes';
import initialState from './initialState';

let catalogue = (state=initialState, action) => {
    switch (action.type) {
        case types.LOAD_CATALOGUE_SUCCESS:
            return {...state,
                catalogue: action.catalogue
            }
        
        default:
            return state
    }
}

export default catalogue