//synchronous
// //asynchronus

// console.log("one");
// console.log("two");
// console.log("three");

// // function hello(){
// //     console.log("hello");
// // }
// // setTimeout(hello,4000) //timeout

// setTimeout(() => {
//     console.log("mushfeka");
// }, 4000);

// console.log("four");
// console.log("five");


// callback function

// function sum(a,b){
//     console.log(a+b)
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);

// }
// // calculator(1,2,sum);
// calculator=(1,2,(a,b)=>{
//     console.log(a+b)
// })

//Nesting callback Hell

// let age =90;

// if(age>=18){
//     if(age>=60){
//         console.log("senior");
//     }else{
//         console.log("middle");
//     }
//     }else{
//         console.log("child");

    
// }
//Nesting
// for(let i=0;i<5;i++){
//     let str="";
//     for(let j=0;j<5;j++){
//         str=str+j;
//     }
//     console.log(str);


// }

//one by one data get we use getNextData method and getdata arrow function
// function getData(dataId,getNextData) {
    // console.log("data",dataId);
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();

//         }
//     }, 4000);
    
// }


// call back hell call again in again in callback syntax
// getData(1,()=>{
//     console.log("calling 1");
//     getData(2,()=>{
//         console.log("calling 2");

//         getData(3,()=>{
//             console.log("calling 3");

//             getData(4,()=>{
//                 console.log("calling 4");

//             });
//         });

//     });
// });

// getData(2,()=>{
//     getData(3);
// });

// async (params) => {
//     let promise = new Promise((resolve,reject)=>{
//         console.log("i m a promise");
//         resolve ('success');
//         });
    
//         function getData(dataId,getNextData) {
//             return new Promise((resolve,reject)=>{
//                 console.log("data",dataId);
//                     setTimeout(() => {
//                         console.log("data",dataId);
//                         // resolve ('success');
//                         reject("error")
//                         if(getNextData){
//                             getNextData();
                
//                         }
//                     }, 4000);
//             })
//         }
    
// }


// const getpromise=()=>{
//     new promise((resolve,reject)=>{
//         console.log("i am promise");
//         // resolve("success");
//         reject("network error")

//     });
// };

// let promise= getPromise();
// promise.then((res)=>{
//     console.log("promised fulfilled",res);

// });

// promise.catch((err)=>{
//     console.log("rejected",err);

// });




// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 5000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 6000);
//     });
// }
// console.log("fetching data1");

// asyncFunc1().then((res)=>{
// console.log("fetching data2");
// asyncFunc2().then((res)=>{
   
// });

// });


// function getData(dataId) {
//    return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("data",dataId);
       
// resolve("success")
        
//     }, 4000);
//    });
   
    
// }

// //promise chain
//  getData(1)
//  .then((res)=>{

//  return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);

//  });


//Async-Await

// function api() {
//     return new Promise((resolve,reject)=>{
//      setTimeout(() => {
//          console.log(" whether data");
        
//  resolve("200")
         
//      }, 4000);
//     });
    
     
//  }
//  async function getWeatherData(){
//     await api();
//     await api();
//  }

function getData(dataId) {
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("data",dataId);
       
resolve("success")
        
    }, 4000);
   });
   
    
}

//asyn await

(async function getAllData(){
    await getData(1);
    console.log("getting data1....");
    await getData(2);
    console.log("getting data2....");
    await getData(3);
    console.log("getting data3....");

})();

