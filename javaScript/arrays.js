// let arr=["apple","banana","grapes"];
// let marks=[98,89,79,59,69];
// console.log(marks);
// console.log(arr);





// let arr =["Black","white","red","Orange","Pink"];
// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i]);
// }

//  let marks=[98,89,79,59,69];
// for(let mar of marks){
// console.log(mar);
// }

// let countries=["India","UAE","USA","UK","Canada"];
// for(let country of countries){
//     console.log(country.toUpperCase());
// }


//Q-1  For  a given array with marks of  students->[85,97,44,37,76,60] find the average marks of the entire class

//  let marks=[98,89,79,59,69];
//  let sum=0;
// for(let mar of marks){
//     sum+=mar;
// }
//     let avg= sum/marks.length;

//     console.log(avg);
// // console.log(sum);






//Q-2 For  a given array with price of items ->[250,645,300,900,50] All items have an offer of 10% off on them . change the array to store final price after
// applying offer.

// let items=[250,645,300,900,50];
// let i = 0;

// for(let item of items){

// // console.log('value at index & {indx}=$ {item}');
// let offer = item/10;
// items[i]= items[i]-offer;
// console.log(items[i])
// i++;
// }

// for(let i=0;i<=items.length;i++){
//     let offer= items[i]/10;
//     items[i]-=offer;
//     console.log(items[i])
//      i++;
// }

let fruits=["apple","Banana","Cherry","Papaya","Orange"];

fruits.push("Pinappale");
// Arrays Methods push , pop ,toString
// let veggies=["potato","tomato","onion","ginger","garlic"];
// push method
// //veggies.push("beans");
//pop method
// let deletedItems= veggies.pop();
// console.log(veggies);
// console.log(deletedItems);

//toString method
// console.log(veggies);
// console.log(veggies.toString());

//concat
//let heroes =["thor","spiderman","ironman","batman","superman"];
// let hero=["batman","superman"];

// console.log(hero.concat(heroes));
// let res=hero+heroes;
// console.log(res);

// Unshift method
// let hero =heroes.unshift("batman");
// console.log("deletd",hero);

//shift method
// let hero =heroes.shift();
// console.log(hero);

//slice method

// console.log(heroes.slice(1,2));

//splice method

//arr.splice(1,1,101,102);

//add element
// arr.splice(2,0,101)

//Delete element
// arr.splice(3,1);

//replace element
// arr.splice(3,1,101);

//Q-1 Create an array to store companies "Bloomberg","Microsoft","Uber","google","IBM","Netflix"

// let companies=["Bloomberg","Microsoft","Uber","google","IBM","Netflix"];
// delete companies from start
//console.log(companies.shift(0));//pop //shoft-start delete- end delete

// remove uber and replace ola
// console.log(companies.splice(2,1,"ola"));
//companies.splice(2,1,"ola");

// add amazon
//console.log(companies.push("amazon"));
// companies.push("amazon");



//foreach loop in arrays
// syntax
// arr.foreach((val){}


// function num(){
//     console.log(1,2,3,4,5);
// }
// function myfun(num){ // we can take function as parameter
//     return num;

// }

// let arr=[1,2,3,4,5];
// arr.forEach(function myfun(val){
//     console.log(val);
// });



// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// });
// let arr=["apple","banana","cherry","grapes","strawberry",];
// arr.forEach((val,indx,array)=>{
//     console.log(val,indx,array);
// });



// Q-3 for aven array of numbers,print the square of each value using the for each loop

// let arr=[1,2,3,4,5];
// arr.forEach((arr)=>{
//     console.log(arr*arr*arr);
// });

// let square=(arr)=>{
//     console.log(arr*arr);
// };
// arr.forEach(square);



//Map method

// arr.map((val)=>{
// return val;
// })
// console.log(arr);

// let newArray=arr.map((val)=>{
   
//     return val*2;
//     });
//     console.log(newArray);


// Filter Method

// let arr=[1,2,3,4,5];

// let evenArray=arr.filter((val)=>{
// return val%2===0;

// });
// console.log(evenArray);


// let arr=[1,2,3,4,5];

// let evenArray=arr.filter((val)=>{
// return val>2;

// });
// console.log(evenArray);


//Reduce Method

// let arr=[1,2,3,4,5];

// let newArray=arr.reduce((prev,curr)=>{
//     return prev>curr?prev:curr;

// });
// console.log(newArray);

// We are given array of marks of students.Filter out of the marks of the marks of student that scored 90


// let marks=[91,82,73,94,75,90];

// let newArray=marks.filter((val)=>{
//     return val>90;

// });
// console.log(newArray);

//Q-2 Take a number n as input from user.Create an array of numbers from 1 to n .Use the reduce method to calculate sum of numbers in the array.
//Use the reduce method to calculate product of all numbers in the array

// let n=prompt("Enter a number");
// let arr=[];
// for(let i =1;i<=n;i++){
// arr[i-1]=i;
// }

// console.log(arr);
// let newArray = arr.reduce((prev,curr)=>{
//     return prev+curr;
//     })
//     console.log(newArray);

//     let factorial = arr.reduce((prev,curr)=>{
//         return prev*curr;
//         })
//         console.log(factorial);
    
// let n= prompt("Enter number");
// let arr=[];yeahno
// for(let i=10;i<=n;i++){
//     arr[i-1]=i;
// }

// console.log(arr);

// let newArray=arr.reduce((prev,curr)=>{

    // return prev+curr;
// })
// console.log(newArray);

// let factorial=arr.reduce((prev,curr)=>{
//     return prev*curr;
//     })
//     console.log(factorial);

























