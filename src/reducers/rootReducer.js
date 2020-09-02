// ./reducers/rootReducer

import {combineReducers} from 'redux';
import catalogue from './catalogueReducer';
import user from './userReducer'

const rootReducer = combineReducers({
    catalogue,
    user
})

export default rootReducer;