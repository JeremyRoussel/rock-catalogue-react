// ./actions/catalogueActions

// Upon Promise completion, Action creator returns the 
// action type and the payload to send to reducer

import * as types from './catalogueActionTypes';

class catalogueActions {

    static loadCatalogueSuccess(catalogue) {
        return {type: types.LOAD_CATALOGUE_SUCCESS, catalogue}
    }

}

export default catalogueActions

// static addContactSuccess(contacts) {
    //     return {type: types.ADD_CONTACTS_SUCCESS, contacts}
    // }

    // static editContactSuccess(contacts) {
    //     return {type: types.EDIT_CONTACTS_SUCCESS, contacts}
    // }

    // static deleteContactSuccess(contacts) {
    //     return {type: types.DELETE_CONTACTS_SUCCESS, contacts}
    // }