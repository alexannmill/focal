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


module.exports = { diceRoll };