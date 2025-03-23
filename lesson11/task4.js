class todos {
static async firstRequestToServer() {
    try {
     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
}
class users {
static async secondRequestToServer() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
}

    async function Promises() {
    try {
    const result = await Promise.all([todos.firstRequestToServer(), users.secondRequestToServer()]);
        console.log('Promise.all', result);
    } catch (error) {
        console.error(error);
    }

    try {
    const result = await Promise.race([todos.firstRequestToServer(), users.secondRequestToServer()]);
        console.log('Promise.race', result);
    } catch (error) {
        console.error(error);
    }
};
Promises();


