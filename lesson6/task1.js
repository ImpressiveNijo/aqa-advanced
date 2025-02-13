//  Function Declaration
 function Area_rectangle(width, height){
 return width * height
 }             
 const area = Area_rectangle(5,10)
 console.log('Площа прямокутника ', area);


//  Function Expression
const Area_rectangle1 = function (width, height) {
    return width * height
}
const area1 = Area_rectangle1(5,10)
console.log('Площа прямокутника ' ,area1);

//  Function Arrow function
const Area_rectangle2 = (width, height) => width *  height 
const area2 = Area_rectangle2(5,10)
console.log('Площа прямокутника ',area2)