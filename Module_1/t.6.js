const answer = confirm('Should I calculate the square root?');

console.log(answer)
if (answer === true) {
    num = prompt('Enter a number')
    numInt = parseInt(num)
    const squareroot = Math.sqrt(numInt)
    document.querySelector('#target').innerHTML = 'The square root is: ' + squareroot
    console.log(square.root)}

else{
    document.querySelector('#target').innerHTML = 'The square root is not calculated.'
    console.log('no')
}
document.querySelector('#target').innerHTML = 'Thanks'

