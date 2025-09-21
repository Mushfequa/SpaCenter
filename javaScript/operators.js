//Arithmetic operators

// let a=10
//  let b=20
//  console.log("a=",a,"&b=",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);//10^20

//unary operators increment,decrement

// let a= 5;
// let b=2;
// console.log("a=",a,"&b=",b);


// a=++a;
// console.log(a);
// console.log("++a=",++a);

//Assignment operators[=,==,+=,-=,*=,/=,%=.**=]

// let a=5;
// let b=2;
// a+=4; //a=a+4
// b+=2;
// b-=3; //b=b-3
//b*=2 ; //b=b*2
// a%=2; //a=a%2
// a**=3; //a=a**3

//  console.log("a=",a,"&b=",b);
//  console.log("a=",a);
//  console.log("b=",b);

//Comperison operators[==,!==,===.!===,>,<,<=,>=]

// let a=5;
// let b=2;

// a>=b; 
// console.log("5>=2",a>=b);

// logical operators [&&,||,!]

// let a=5;
// let b=6;

// a>b && a<b; 
// console.log("5>2 && 5<2",a>b && a<b);

// let cond1=a>b;
// let cond2=a=b;


// console.log("cond1 || cond2=",a>b || a===5);

//! operator make false condition true and true condition false

// console.log("!(a>b)=",!(a>b))

//Ternary operator ? :

// let age = 18;

// let result =age>=18 ? "adult":"not adult";

// console.log(result)

// age>=18 ? console.log("adult"):console.log(" not adult");

// Q-1 Get user toninput a number using prompt("enter a number:").check if the number is a multiple of 5 or not
let number = prompt("Enter a number");

if(number%3===0){
    console.log(number," is multiple of 3");
}else{
    console.log(number," is not multiple of 3");

}

