const enter_year = prompt('Enter a year')
const year = parseInt(enter_year)
const leap_year = year % 4
const div_by_hundred = year % 400

if (div_by_hundred === 0)
    document.querySelector('#target').innerHTML = year + ' is a leap year'

else if (leap_year === 0)
    document.querySelector('#target').innerHTML = year + ' is a leap year'

else
    document.querySelector('#target').innerHTML = year + ' is not a leap year'