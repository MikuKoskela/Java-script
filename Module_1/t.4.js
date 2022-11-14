const name = prompt('Insert name here:')

function hat(maxLimit = 4) {
    let rand = Math.random() * maxLimit
    rand = Math.floor(rand)
    return rand
}
let rand = hat()
if (rand===0)
    document.querySelector('#target').innerHTML = name +', you are Gryffindor'

else if (rand===1)
    document.querySelector('#target').innerHTML = name +', you are Slytherin'

else if (rand===2)
    document.querySelector('#target').innerHTML = name +', you are Hufflepuff'

else if (rand===3)
    document.querySelector('#target').innerHTML = name +', you are Ravenclaw'