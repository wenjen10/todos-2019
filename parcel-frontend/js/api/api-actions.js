function getRequest (location, calback) {
    fetch("https://localhost:44326/api/todos")
        .then(response => response.json())
        .then(jsonData => console.log (jsonData))
        .catch(err => console.log(err));
}

export default {
    getRequest
}