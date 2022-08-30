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

// takes in a string
//split string by " "
//loop through array/ sentence  
//nested loop to catch first letter of word
// uppercase first letter  of first letter in each element 
//all other letters set to lower case
// return string 

// titleCase("this is an example") should return "This Is An Example"
// titleCase("test") should return "Test"
// titleCase("i r cool") should return "I R Cool"
// titleCase("WHAT HAPPENS HERE") should return "What Happens Here"
// titleCase("") should return ""
// titleCase("A") should return "A"
