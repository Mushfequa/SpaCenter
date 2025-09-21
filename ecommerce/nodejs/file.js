const fs = require("fs");
const os = require("os");
console.log(os.cpus().length);


//sync....Blocking...
//fs.writeFileSync("./test.txt","Hey mushfeka");
//console.log("1");

// Blocking...
//const result = fs.readFileSync("contact.txt","utf-8");
//console.log(result);

//console.log("2");

//Non -Blocking...
//console.log("1");

fs.readFile("contact.txt","utf-8",(err,result)=>{;
console.log(result);
});
//console.log("2");
//console.log("3");
//console.log("4");
//console.log("5");


// Default Thread pool Size = 4
//Max?-8core

//async...Non-Blocking...
//fs.writeFile("./test.txt","Hey mushfeka async",(err)=>{});

//const result = fs.readFileSync("./contact.txt","utf-8");
//console.log(result);

//fs.readFile("./contact.txt","utf-8",(err,result)=>{
 //   if(err){
       // console.log("Error",err);
   // }else{
       // console.log(result);
   // }
//});

//fs.appendFileSync("./test.txt",'${Date.now()}hey there\n');
//fs.cpSync('./test.txt','./copy.txt');

//fs.deleteSync("./copy.txt");

//console.log(fs.statSync("./text.txt"));
//fs.mkdirSync("my-docs/a/b",{recursive:true});