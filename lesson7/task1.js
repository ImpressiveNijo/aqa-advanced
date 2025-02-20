function handleNum(num, handleEven, handleOdd) {
  if (num % 2 == 0) {
  return handleEven();
  } else {
  return handleOdd();
  }
}
function handleEven() {
console.log(`The number is even`);
}
function handleOdd() {
console.log(`The number is odd`);
}
handleNum(11, handleEven, handleOdd); 
handleNum(8, handleEven, handleOdd); 
