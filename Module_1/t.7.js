let dice_amount = prompt('How many dices would you like to throw?')
dice_amount = parseInt(dice_amount)

function rollDice(dice_amount) {
    let diceResults = [];
    for (let i = 0; i < dice_amount; i++){
        let resultOfDice = "";
        resultOfDice = Math.floor(Math.random() * 6 + 1);
        diceResults += resultOfDice;
    }
    return diceResults
}
const list = rollDice(dice_amount)
for(let i = 0; i < dice_amount; i++){
    const total = list(i-1) + list.at(i + 1)

console.log('Rolled ' + dice_amount + " Dice: " + total);}


