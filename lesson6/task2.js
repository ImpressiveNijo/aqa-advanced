    function Adult(age){
        if (age >= 18) {
            return true;
        } else if  (age <=17) {
            return false;
    }
}
const age = 25
const age1 = 15
console.log('Чи є особа дорослою? ',Adult(age));
console.log('Чи є особа дорослою? ' ,Adult(age1));