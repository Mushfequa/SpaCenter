function OccuranceCount(str,sub){
    return str.split(sub).length-1;

}
console.log(OccuranceCount("abababab","ab"));