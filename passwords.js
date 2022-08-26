// Challange 
// Our program should define a function named obfuscate. This function should take a string as an argument and obfuscate it by applying the following rules:

// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).

//Test
// node passwords.js password
// p4ssw0rd
// node passwords.js abracadabra
// 4br4c4d4br4
// node passwords.js audaciously
// 4ud4ci0us1y



// process.argv a single string
let array = process.argv[2]
//function obfuscate with rules
const obfuscate = string => {
  let newPass = ""
  for (let i = 0; i < string.length; i++){
    if ( string[i] !== 'o' && string[i] !== 'a'&& string[i] !== 'e' && string[i] !== 'l'){
      newPass += string[i]
    }
    //o replace with 0
    else if (string[i] === "o"){
      newPass += '0';
    }
    // e replace with 3
    else if (string[i] === "e"){
      newPass += "e";
    }
    // every a replace w 4
    else if (string[i] === "a"){
      newPass += '4';
    }
    //l replace with 1
    else if (string[i] === "l"){
      newPass += '1';
    }
    if ( string[i] === 'o' || string[i] === 'a' || string[i] === 'e' || string[i] == 'l'){
      newPass = newPass;
  }
  }
  return newPass
};

console.log(obfuscate(array))