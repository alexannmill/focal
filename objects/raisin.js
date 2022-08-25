const raisinAlarm = function (cookie) {
  // Put your solution here
  for(type of cookie){
    if (type === "🍇") {
     return "Raisin alert";
    }
  }
  return "All Good";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function (cookies) {
  let array = [];
  for (bunch of cookies) {
    array.push(raisinAlarm(bunch));
  }
  return array;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);


//Output
// ["Raisin alert!", "Raisin alert!", "All good!"]