/*
have var for final message
have var start with "today i .." and the first element in array
loop through array adding each element to the array
print final message
add period at the end
*/
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const other = ['hello', 'world'];
function joinList(array) {
  if (array.length === 0) {
    return "";
  }
  let message = '';
  for (let i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      message += array[i] + ", ";
    }
    else {
      message += array[i] + '';
    }

  }
  return message;
}
// console.log(joinList([]));
// console.log(joinList(conceptList));
// console.log(joinList(other));

module.exports = { joinList }