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
for (const person of users){
    console.log(`${person.name}, ${person.age}, ${person.email}`);
}
