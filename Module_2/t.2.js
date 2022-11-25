const No_participants = prompt('How many participants? ')
let participants = [];


for (let i = 0; i < No_participants; i++) {
    participants[i] = prompt('Name of participant: ')
    console.log(participants[i])

}

document.querySelector('#target').innerHTML = participants