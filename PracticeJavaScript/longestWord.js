 function longestWord(sentence){


let word= sentence.split("");
return word.reduce((longest,word)=>word.length>longest.length?word:longest);
}

console.log(longestWord("NodeJS is a powerful runtime environment")); // environment

function longestWord(sentence) {
    let words = sentence.split(" ");
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
  }
  
  console.log(longestWord("NodeJS is a powerful runtime environment")); // environment
  