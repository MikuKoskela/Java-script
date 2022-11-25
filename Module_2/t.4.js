const numbers = []

alert('Enter "0" when you want to stop. ')
numbers[0] = prompt('Give a number ')

for (let i = 0;numbers.length < 100000; i++) {

    numbers[i] = prompt('Give a number ')
    console.log(numbers[i])
    if (numbers[i] === '0'){
        break;
    }

}
numbers.sort((a,b) => a-b);
numbers.reverse()
console.log(numbers)
