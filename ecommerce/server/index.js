const http =require("http");
const fs =require("fs");


const myServer = http.createServer((req,res)=>{
    const log = '${Date.now()}:${req.url} New Req Received\n';
    fs.appendFile("log.txt",log,(err ,data)  =>{
switch(req.url){
    case'/':res.end("HomePage");
    break
    case'/about':res.end("i am musu");
    break;
    case'/signup':
    if(req.method==="GET")res.end("this is signup");
    else if(req.method==="POST"){
        res.end("success");
    }
    
    s


    default:
        res.end("404 not found");
}
    });

    });
    

myServer.listen(8000,() =>  console.log ("server started"));