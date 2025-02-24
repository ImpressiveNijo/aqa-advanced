const users = [
    {
    name: "John",
    email: "John123@gmail.com",
    age: 25
    },
    {
    name: "Chloe",
    email: "Chloe123@gmail.com",
    age: 32 
    }
]; 
for (const {name, email, age} of users){
    console.log(`${name}, ${age}, ${email}`);
}
