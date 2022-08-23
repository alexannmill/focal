const diceRolls = process.argv[2];
console.log(diceRolls);
const diceRoll = function(num) {
  const final = [];
  for (let i = 0; i < num; i++) {
    let roll = " " + Math.floor(Math.random() * 6 + 1);
    final.push(roll);
  }
  return final;
};
console.log(`Rolled ${diceRolls} dice:${diceRoll(diceRolls)}`);
/*
Dice rolled "argd" string
roll amount of val of arg
generate random numbers between 1-6
add rolls into final print out
print final results

let printOut= ''
for (let roll = 0; roll <= args; roll++){
let result = Math.floor(Math.random());
printOut += result
}
return printOut
}
console.log(rollDice())

*/