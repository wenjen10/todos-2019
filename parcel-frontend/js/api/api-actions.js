function getRequest (location, callback) {
    fetch("https://localhost:44326/api/todos")
        .then(response => response.json())
        .then(jsonData => callback(jsonData))
        .catch(err => console.log(err))
}
function postRequest(location, requestBody, callback){
    fetch (location, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(jsonData => callback(jsonData))
    .catch(err => console.log(err))
}

export default {
    getRequest,
    postRequest
}