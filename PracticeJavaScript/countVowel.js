function vowel(str){
    return (str.match(/[aiou]/gi)||[]).length;
}
console.log(vowel("node js"));

return (str.match(/[aiou]/gi)).length;