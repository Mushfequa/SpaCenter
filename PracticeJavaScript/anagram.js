function anagram(str1,str2){
    const format= s=>s.replace(/\s+/g,"").toLowerCase().split("").sort().join("");
return format(str1)===format(str2);

}
console.log(anagram("listen","silent"));
console.log(anagram("hello","world"));