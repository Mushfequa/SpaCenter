// const memo={}
// function fib(n){
//     if(n<=1) return n;
//    if(memo[n]) return memo[n];
//    return memo[n]= fib(n-1)+fib(n-2);
// }
// console.log(fib(10));

// const memo={}

// function fib(n){
//     if(n<=1) return n;
//     if(memo[n])return memo[n];
//     return memo[n]= fib(n-1)+fib(n-2);


// }
// console.log(fib(19));


const memo ={}
function fib(n){
    if(n<=1) return n;
    if(memo[n] )return memo[n];
    return memo[n]= fib(n-1)+fib(n-2);
}

console.log(fib(4));









































