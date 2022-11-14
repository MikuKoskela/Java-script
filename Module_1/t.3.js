const number1Str = prompt('Give 1. number');
const number2Str = prompt('Give 2. number');
const number3Str = prompt('Give 3. number');
const number1 = parseInt(number1Str)
const number2 = parseInt(number2Str)
const number3 = parseInt(number3Str)

const sum = (number1 + number2 + number3);
console.log(sum)
document.querySelector('#sum').innerHTML = 'The sum is: ' + number1 + '+' + number2 + '+' + number3 + ' = ' + sum;