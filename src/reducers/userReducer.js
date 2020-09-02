// ./reducers/userReducer.js

import * as types from '../actions/userActionTypes';
import initialState from './initialState';

let user = (state=initialState.user, action) => {
    switch (action.type) {
        case types.LOAD_USER_SUCCESS:
            return action.user
        
        default:
            return state
    }
}

export default user
