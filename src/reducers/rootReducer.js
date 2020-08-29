// ./reducers/rootReducer

import {combineReducers} from 'redux';
import catalogue from './catalogueReducer';

const rootReducer = combineReducers({
    catalogue
})

export default rootReducer;