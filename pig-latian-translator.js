let originalWords = process.argv.slice(2);
let pigLatinWords = [];

// console.log("originalWords is", originalWords);
// console.log("pigLatinWords is", pigLatinWords);

for (let i = 0; i < originalWords.length; i++){

  // console.log(originalWords[i])
// console.log(translateToPigLatin(originalWords[i]));

  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}


console.log(pigLatinWords.join(" "));

function translateToPigLatin(word) {
  // console.log("word", word);
  // console.log("letter", word[0]);
  // console.log("rest", word.slice(2, word.length))
  return word.slice(1, word.lengh) + word[0] + "ay";
  // console.log(word);
}
