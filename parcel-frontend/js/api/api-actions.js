function getRequest (location, calback) {
    fetch('https://swapi.co/api/people/22')
        .then(response => response.json())
        .then(jsonData => console.log (jsonData))
        .catch(err => console.log(err));
}

export default {
    getRequest
}