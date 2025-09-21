function isOnlyDigits(str){
    return /^\d+$/.test(str);
}
console.log(isOnlyDigits("123456"));
console.log(isOnlyDigits("123ab56"));
