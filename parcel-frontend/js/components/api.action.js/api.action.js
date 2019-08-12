function getRequest (location, calback) {
    fetch(location)
        .then(response => response.json())
        .then(json.Data => callback (jsonData))
        .catch(err => confirm.log(err));

}