async function firstRequestToServer() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

async function secondRequestToServer() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

    async function Promises() {
    try {
        const result = await Promise.all([firstRequestToServer(), secondRequestToServer()]);
        console.log('Promise.all', result);
    } catch (error) {
        console.error(error);
    }

    try {
        const result = await Promise.race([firstRequestToServer(), secondRequestToServer()]);
        console.log('Promise.race', result);
    } catch (error) {
        console.error(error);
    }
};
Promises();

