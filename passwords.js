let array = process.argv[2];
const obfuscate = (string) => {
  let newPass = "";
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== "o" &&
      string[i] !== "a" &&
      string[i] !== "e" &&
      string[i] !== "l"
    ) {
      newPass += string[i];
    }
    //o replace with 0
    else if (string[i] === "o") {
      newPass += "0";
    }
    // e replace with 3
    else if (string[i] === "e") {
      newPass += "3";
    }
    // every a replace w 4
    else if (string[i] === "a") {
      newPass += "4";
    }
    //l replace with 1
    else if (string[i] === "l") {
      newPass += "1";
    }
    if (
      string[i] === "o" ||
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] == "l"
    ) {
      newPass = newPass;
    }
  }
  return newPass;
};

module.exports = { obfuscate };
