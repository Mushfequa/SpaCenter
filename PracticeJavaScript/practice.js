// function palindrom(number){
// number= number.toLowerCase();

//     return number===number.split('').reverse('').join('');
   
    
// }
//  console.log(palindrom("123456"));

// let n=5;
//     for(let i =0;i<=n;i++){
// let str="*";
    

// console.log(str.repeat(i));
//     }

// let n=5;
//     for(let i =0;i<=n;i++){
// let str=i+"";
    

// console.log(str.repeat(i));
//     }

// let n=5;
//     for(let i =n;i>=0;i--){
// let str="*";
    

// console.log(str.repeat(i));
//     }

// let n=5;
//     for(let i =n;i>=0;i--){
// let str=i+"";
    

// console.log(str.repeat(i));
//     }

// let n=5;
//     for(let i =n;i>=1;i--){
// let str="*";
// let space=' ';
    

// console.log(space.repeat((n-i))+str.repeat(i));
//     }

    // let n=5;
    //     for(let i=1;i<=n;i++){
    //     let str =" *";
    //     let space=' ';
    //     console.log(space.repeat((n-i))+str.repeat(i));
    // }

    // function right(n){
     
    //     for(let i =1;i<=n;i++){
    //         let row ="";

    //         for(let j =1;j<=n;j++){
    //             if(i===1||i===n||j===1||j===n){
    //                 row+="*";
    //             }else{
    //                 row+=" ";
    //             }
    //         }
    // console.log(row);
    //     }
    // }
    // right(5);

    // let n= 5;

    // for(let i =1;i<=n;i++){
        
    //     console.log(" ".repeat(n-i)+" *".repeat(i));
    // }

    //     for(let i =n-1;i>=1;i--){
        
    //         console.log(" ".repeat(n-i)+" *".repeat(i));
    // }

// function reverse(str){
//     let rev='';
//     for(let i =str.length-1;i>=2;i--)
// rev+=str[i];
// return rev;
    
// }
//     console.log(reverse("mushfeka"));
//     function reverse(str){
//       return  str.split("").reverse("").join("");
        
//     }
//         console.log(reverse("mushfeka"))


//         function palindrom(str){
//             str= str.toLowerCase();
//             return str=== str.split("").reverse("").join("");
              
//           }
//               console.log(palindrom("mushfeka"));

              
//               function isOnlyDigits(str){
                
//                 return /\d+$/gi.test(str);
                  
//               }
//                   console.log(isOnlyDigits("123456"));

//                   function anagram(str1,str2){
//                     let format = s=>s.replace(/\s+/g,"").toLowerCase("").split("").sort().join("");
//                     return format(str1)===format(str2);

//                   }
//                   console.log(anagram("listen","silent"));



//                   function firstLetter(str){
//                     return str.replace(/\b\w/g,char=>char.toLowerCase());

//                   }
//                   console.log(firstLetter("Node js"));

// function vowel(str){
//     return (str.match([/aiou/gi])||[]).length;
// }
// console.log(vowel("node js"));

// function longestWords(sentence){
//     let words= sentence.split("");
//     return words.reduce((longest,word)=>word.length>longest.length?word:longest,"");
// }
// console.log(longestWords("node js"));

// function nonRepeat(str){
//     for(let char of str){
//         if(str.indexOf(char)===str.lastIndexOf(char)){
//             return char;
//         }
//     }
// return null;
    
// }
// console.log(nonRepeat("aabbcccdef"));

// function frequency(str){
//     let freq={};
//     for(let char of str){
//         freq[char]= (freq[char]||0)+1;
//     }
// return freq;
// }
// console.log(nonRepeat("success"));

// function count(str,sub){
//     return str.split(sub).length-1;
// }
// console.log(count("abababab","ab"));


function reverse(str){
    return str.split("").reverse().join("");
}
console.log(reverse("mushfeka"));

function reverse(str){
    let rev='';
    for(let i=str.length-1;i>=0;i--)
        rev+=str[i];
        return rev;
    
}
console.log(reverse("mushfeka"));

function isPalindrom(str){
    str= str.toLowerCase();
    return str===str.split("").reverse().join("");
}
console.log(isPalindrom("mushfeka"));

function removeDuplicate(str){
    return [...new Set(str)].join("");
}
console.log(removeDuplicate("maam"));

function removeSentence(sentence){
   return sentence.split("")
    .map(word=>word.split().reverse().join())
    .join("");
}
console.log(removeSentence("node js is framework"));

function occuranceCount(str,sub){
    return str.split(sub).length-1;

}
console.log(occuranceCount("ababababab","ab"));

function longestWord(sentence){
    let words= sentence.split("");
    return words.reduce((longest,word) =>word.length>longest.length?word:longest,"")
    
 }
 console.log(longestWord("node js is framework"));

 function isOnlyDigits(str){
    return /\d+$/.test(str);

}
console.log(isOnlyDigits("12345"));

function frequencyCharacter(str){
    let freq={};
  for(let char of str){
    freq[char]= (freq[char]||0)+1;
    
  }
  return freq;
}
console.log(frequencyCharacter("aabbcceeddfff"));

function butterfly(n){
    for(let i=1;i<=n;i++){
        let row= ("* ".repeat(i),"  ".repeat(n-i),"* ".repeat(i));
        console.log(row)
    }
        for(let i=n-1;i>=1;i--){
            let row=("* ".repeat(i),"  ".repeat(n-i),"* ".repeat(i));
            console.log(row)

        
    
}


}

butterfly(5);


function hollow(n){
    for(let i=1;i<=n;i++){
        let row= "  ".repeat(n-i);
       
    
        for(let j=1;j<=n;j++){
          if(i===1 ||j===1 ||i===n ||j===n ){
            row+="*";
          }else{
            row+=" ";
          }
         
        }  
        console.log(row)
}


}

hollow(5);


function reverse(str){
// return str.split("").reverse("").join("");
let rev="";
for(let i =str.length-1;i>=0;i--)
rev+=str[i];
return rev;
}
console.log(reverse("mush"));

function anagram(str1,str2){
    // return str.split("").reverse("").join("");
    let format=s=>s.replace(/|s+/g,"").toLowerCase().split("").sort().join("");
    return format(str1)==format(str2);
    }
    console.log(anagram("mush","wolrd"));

    function letters(str){
       return str.replace(/\b\w/g,char=>char.toUpperCase());
    }
    console.log(letters("node js"))

    function vowe(str){
        return (str.match(/[aiou]/gi)).length;
    }
    console.log(vowe("node js"))

    function isOnlyDigits(str){
        return /^\d+$/.test(str);
    }
    console.log(isOnlyDigits("123456"))

    function frequence(str){
        let freq={};
        for(char of str){
            freq[char]=(freq[char]||0)+1;
        }
        return freq;
    }
    console.log(frequence("success"))

    function longest(sentence){
let word= sentence.split("");
        return word.reduce((longest,word)=>word.length>longest.length?word:longest,"");
    }
    console.log(longest("node js is framework"))


    function reverseWord(sentence){
        return sentence
        .split(" ")
        .map( word=>   word.split("").reverse().join(""))
        .join(" ");
            }
            console.log(reverseWord("node js is framework"));

            function notRepeatedCharacter(str) {
                for(char of str){
                    if(str.indexOf(char)===str.lastIndexOf(char)){
                        return char;
                    }
                }
               return null;
              }
              console.log(notRepeatedCharacter("aabbbcddd")); 

              function remove(str){
                return [...new Set(str)].join("");

              }
              console.log(remove("maam"));