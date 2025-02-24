const car1 = {
    brand: "Opel",
    model: "Blitz",
    year: 2014
}
const car2 = {
    brand: "Chevrolet ",
    model: "Aveo",
    owner: "Joey"
}
const car3 = { ...car1, ...car2 }
console.log(car3);