// ./actions/addSample.js

// APi and Actions import
import catalogueAPI from '../api/catalogueAPI';
import catalogueActions from './catalogueActions'

let addSample = (sampleBody) => {
    return function(dispatch) {
        return catalogueAPI.addSample(sampleBody).then(sample => {
            dispatch(catalogueActions.addSampleSuccess(sample))
        }).catch(error => {
            throw(error)
        })
    }
}

export default addSample