const conceptList = [
  "gists",
  "types",
  "operators",
  "iteration",
  "problem solving",
];
const other = ["hello", "world"];

function joinList(array) {
  if (array.length === 0) {
    return "";
  }
  let message = "";
  for (let i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      message += array[i] + ", ";
    } else {
      message += array[i] + "";
    }
  }
  return message;
};

module.exports = { joinList };
