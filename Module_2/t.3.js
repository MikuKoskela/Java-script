const dogs = []

for (let i = 6; i--;) {
        dogs[i] = prompt('Name of a dog: ')
        console.log(dogs[i])
}
dogs.sort()
dogs.reverse()
document.querySelector('#target').innerHTML = dogs