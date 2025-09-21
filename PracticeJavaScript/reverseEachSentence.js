// function reverseSentence(sentence){
//     return sentence
// .split("")
// .map(word=>word.split("").reverse().join(""))
// .join("");
// }

// console.log(reverseSentence("node js is progrram"));

function reverseWords(sentence) {
    return sentence
      .split(" ")
      .map(word => word.split("").reverse().join(""))
      .join(" ");
  }
  console.log(reverseWords("Node Js Interview")); 
  // edoN sJ weivretni
  