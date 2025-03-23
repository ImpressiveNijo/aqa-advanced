function firstRequestToServer() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => console.error(error));
}

function secondRequestToServer() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => console.error(error));
}

Promise.all([firstRequestToServer(), secondRequestToServer()])
    .then(results => console.log('Promise.all', results))
    .catch(error => console.error(error));

Promise.race([firstRequestToServer(), secondRequestToServer()])
    .then(result => console.log('Promise.race', result))
    .catch(error => console.error(error));

