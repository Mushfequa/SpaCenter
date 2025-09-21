const express= require("express");
const {connectToMongoDB} =require('./connect');
const urlRoute =require('./routes/url');
const URL=require('./models/url');


const app = express();
const PORT= 8001;

//connection we have to give localhost and database name
connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log('mongodb is connect'));

//middleware
app.use(express.json());

//server side rendering

app.get('/test',async (req,res)=>{
    const allUrls= await URL.find({});
    return res.end(
        `<html>
        <head></head>
        <body>
        <ol>
        ${allUrls.map(url=>`<li>${url.shortId}-${url.redirectURL}-${url.visitHistory.length}</li>`).join("")

        }
        </ol>
        </body>
        </html>
        `
    )


});
//server side rendering end 
app.use("/url",urlRoute);

app.get('/url/:shortId',async(req,res)=>{
    //app.get('/:shortId',async(req,res)=>{
    const shortId = req.params.shortId;
   const entry= await URL.findOneAndUpdate({
        shortId
    },
    {
        $push:{
        visitHistory:{
            timestamp:  Date.now(),
        },
      

    },
}

);
res.redirect(entry.redirectURL);
})



app.listen(PORT,()=>console.log("server started at PORT:${port}"));





