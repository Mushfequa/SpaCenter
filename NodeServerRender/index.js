const express= require("express");
const path = require("path");
const {connectToMongoDB} =require('./connect');
const cookieParser= require("cookie-parser");
const {restrictToLoggedUserOnly,checkAuth}= require("./middlewares/auth")

const URL = require("./models/url");
const urlRoute =require('./routes/url');
const staticRoute =require('./routes/staticRouter');
const userRoute= require('./routes/user');


const app = express();
const PORT= 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log('mongodb is connect'));
//views set
app.set("view engine","ejs");

app.set("views",path.resolve("./views"));


app.use(express.json());

//parse url data middleware
app.use(express.urlencoded({extended:true}));
// cookie
app.use(cookieParser());


//views set
// app.get("/test",async (req,res)=>{
//     const allUrls= await URL.find({});
//     return res.render("home",{
//         urls:allUrls,
//     });

    
// });
//register
//restrictToLoggedUserOnly for this particular route middleware
app.use("/url",restrictToLoggedUserOnly,urlRoute);
app.use("/user",userRoute);
app.use("/",checkAuth,staticRoute);




app.get("/url/:shortId",async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },
    {
        $push:{
            visitHistory:{
                timeStamp: Date.now(),
            },
        },
    }
);

res.redirect(entry.redirectURL);
})

app.listen(PORT,()=>console.log("server started at PORT:${port}"));



