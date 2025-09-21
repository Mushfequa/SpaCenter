// const fs= require('fs');
// fs.readFile('test.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     const words=data.split(/\s+/).length;
//     console.log(`word count:${words}`);
// });

const fs= require("fs");
fs.readFile("test.txt",'utf-8',(err,data)=>{
    if(err) throw err;
    const words= data.split(/\s+/).length;
    console.log(`word count:${words}`);
})