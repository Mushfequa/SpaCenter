// function remove(arr){
//     return[...new Set(arr)];
// }
// console.log(remove([1,2,3,4,4]));

// function remove(arr){
//     return [...new Set(arr)];

// }
// console.log(remove([1,2,3,4,4]));


// function isOnlyDigits(str){
//    let words= str.split('');
//    return words.reduce((a,b)=>(a.length>=b.length?a:b));
// }

// console.log(isOnlyDigits("kaan"));


function remove(str){
   return [...new Set(str)].join("");

}
console.log(remove("programming"));

let n=5;
for(let i=1;i<=n;i++){
}
console.log("".repeat(i));
