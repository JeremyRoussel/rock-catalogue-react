// ./actions/putSample.js

// APi and Actions import
import catalogueAPI from '../api/catalogueAPI';
import catalogueActions from './catalogueActions'

let putSample = (sampleBody) => {
    return function(dispatch) {
        return catalogueAPI.putSample(sampleBody).then(sample => {
            dispatch(catalogueActions.putSampleSuccess(sample))
        }).catch(error => {
            throw(error)
        })
    }
}

export default putSample