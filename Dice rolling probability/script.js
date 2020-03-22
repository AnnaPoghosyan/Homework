let totalDiceRolls = 0;
let gettingSix = 0;
while(gettingSix < 1200) {
    let rollingDice = (Math.floor(Math.random() * 6) + 1);
    if (rollingDice === 6) {
        gettingSix += 1;
    }
    totalDiceRolls +=1;
}
document.write(`The dice is rolled ${totalDiceRolls} times`+"<br>")
document.write(`We've got six ${gettingSix} times`+"<br>")
document.write(`In average we've got six ${gettingSix/totalDiceRolls} times`)

