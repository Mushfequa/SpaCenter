//Q-1 Create a h2 heading element with text ="hello javascript" append  "from apna college students" to this text using js


// let h1=document.querySelector("h1");
// console.dir(h1.innerText);
// h1.innerText=h1.innerText+"from apna college student";

//Q-2 Create 3 divs with common class nam-"box". access them &add some unique text to each of them


// let divs=document.querySelector(".box");
// let indx=[1];
// for(div of divs){
//     // console.log(div.innerText);
//     div.innerText="new unique value 1";
//     indx++;


// }
// //console.log(divs[0]);
// (divs[0]).innerText="new unique value 1";
// (divs[1]).innerText="new unique value 2";
// (divs[2]).innerText="new unique value 3";


//Q-3 Create a new button element.Give it a text  "click me ", background color of red & text color of white

// let newbtn = document.createElement("button");
// newbtn.innerText="click me";

// newbtn.style.color="white";
// newbtn.style.backgroundColor="red";

//  document.querySelector("body").prepend(newbtn);

//Q-4 Create a <p> tag in html ,give it a class & some styling.
// Now create a ne class in CSS and try try to append this class to <p> element


 
let para= document.querySelector("p");
// we write this in console
para.getAttribute("class");
para.setAttribute("class", "newClass");
