const titleCase = (input) => {
  if (input === "") {
    return "";
  }
  const splitString = input.split(" ");
  let newArray = [];
  for (const word of splitString) {
    for (let i = 0; i < 1; i++) {
      newArray.push(word[0].toUpperCase());
    }
    for (let j = 1; j < word.length; j++) {
      newArray.push(word[j].toLowerCase());
    }
    newArray.push(" ");
  }
  const finalAnswer = newArray.join("").trim();
  return finalAnswer;
};