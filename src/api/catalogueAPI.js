// ./api/catalogueAPI.js

// Export of a class with methods that call to the database

let localURL = "http://ec2-18-191-206-123.us-east-2.compute.amazonaws.com/"
// let localURL = "http://localhost:3001/"

class catalogueAPI {

    // getAllSamples should return the json object of the list of samples from the defined endpoint
    
    static getAllSamples() {
        return fetch(localURL + 'catalogue')
            .then(response => response.json())
            .catch(error => error)
    }

    // sampleBody of type { id: int, name: "", project: "", user: int, field: "", well: "", thumbnail: ""}
    static addSample(sampleBody){
        return fetch(localURL + 'catalogue', {
            method: 'post',
            headers: {"Content-Type": 'application/json'},
            body: sampleBody
        })
        .then(response => response.json())
        .catch(error => error)
    }

    // ./api/catalogueAPI

    // sampleBody of type { id: int, name: "", project: "", user: int, field: "", well: "", thumbnail: ""}
    static putSample(sampleBody){
        return fetch(localURL + 'catalogue', {
            method: 'put',
            headers: {"Content-Type": 'application/json'},
            body: sampleBody
        })
        .then(response => response.json())
        .catch(error => error)
    }

}

export default catalogueAPI