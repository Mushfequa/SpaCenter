function cpitalizedFirstLetter(str){
    return str.replace(/\b\w/g,char=>char.toLowerCase());


}
console.log(cpitalizedFirstLetter(" Node Js"));


// function cpitalizedFirstLetter(str){
//     return str.replace(/\b\w/g,char =>char.toUpperCase());
// }
// console.log(cpitalizedFirstLetter("node js"));