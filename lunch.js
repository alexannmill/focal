const whatToDoForLunch = function (hungry, availableTime) {
  console.log("I don't know what to do!");
  if (!hungry) {
    return console.log("Get back to work");
  }

  if (availableTime < 20) {
    return console.log("Grab a quick snack");
  }

  if (availableTime < 30) {
    return console.log("Cook something tasty");
  }

  console.log("Wheres your head at?!");
};

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);

module.exports = { whatToDoForLunch };
