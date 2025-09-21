// let str="mushfequa";
// //inbuilt properties 
// console.log(str[8]);
// console.log(str.length);

// //Template Literals


// let obj={

//     item:"pen",
//     price:10,

// };
// let output='the cost of ${obj.item} is ${obj.price} rupees';
// console.log(output);
//console.log("the cost of",obj.item,"is",obj.price,"rupees");

// String Method toLowecasw,toUpperCase,trim

// let str="musfequa";
// let newstr = str.toUpperCase();
// console.log(str);
// console.log(newstr);

// replace
// let str1 ="mushequa";
// let str2 ="leswala";

// console.log(str1.replace(str2));

// Concat

// let str1 ="mushequa";
// let str2 ="leswala";
// console.log("i m learning from "+str1+str2);
//let res= "i m learning from "+str1+str2;
//console.log(res);
//console.log(str1.concat(str2));


// let str ="mushfequa";
// console.log(str.charAt(1));

// String slice

// let str ="mushfequa";
// console.log(str.slice(1,4));

//String substring
// let str ="mushfequa";
// console.log(str.substring(0,9));

//String replace

// let str ="hello";
// console.log(str.replace("h","y"));

//Q-1 Prompt the user to enter their full name ,Generat a username for them based on the input Start username with @ followed by their full name and ending with 
//with the full name with the fullname length.

let fullname = prompt("Enter your fullname");
let username = "@"+fullname+123+fullname.length;

console.log(username);

