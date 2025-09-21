// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("handler1");
//     let a=25;
//     a++;
//     console.log(a);
// };

// btn1.onclick=(e)=>{
//         console.log(e);
//         console.log(e.type);
//         console.log(e.target);


        
    // };
// btn1.onclick=()=>{
//     console.log("handler2");
    
// };

// let div =document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("inside di");
// };


//Event Listener methods
//node.addEventListener(event,callback)
//node.removeEventListener(event,callback)

// let btn1 =document.querySelector("#btn1");
// btn1.addEventListener=("click",(evt)=>{
//     console.log("button1 was clicked-handler1");
   

// });

// btn1.addEventListener=("click",(evt)=>{
//     console.log("button1 was clicked-handler2");
   

// });
// const handler3=("click",(evt)=>{
//     console.log("button1 was clicked-handler3");
   

// });
// btn1.addEventListener=("click",(evt)=>{
//     console.log("button1 was clicked-handler4");
   

// });
// btn1.removeEventListener=("click",handler3 );



//Q1 Create a toggle button that changes the screen to dark-mode when clicke the light-mode when clicked again

let modeBtn= document.querySelector("#mode");
let body=document.querySelector("body");
let currmode="light"
modeBtn.addEventListener("click" ,()=>{
   if(currmode==="light"){
    //backgroundcolor change
    body.classList.add("dark");
    body.classList.remove("light");

    // document.querySelector("body").style.backgroundColor="black";
    currmode="dark";


   }else{
    body.classList.add("light");
    body.classList.remove("dark");
``
    // document.querySelector("body").style.backgroundColor="white";

    currmode="light";
   }
   console.log(currmode);
})