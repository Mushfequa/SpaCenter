const User= require('../models/user');
//for uuid
const { v4: uuidv4 } = require("uuid");


const{setUser}= require('../service/auth');
async function handleUserSignUp(req,res){
const {name,email,password}= req.body;
await User.create({
    name,
    email,
    password,
});


return res.redirect("/");
}

async function handleUserLogin(req,res){
    const {email,password}= req.body;
   const user= await User.findOne({email,password});
    if(!user)
        return res.render("login",{
    error:'Invalid Username or password'
    
        });
        //uuid authintacation
// const sessionId =uuidv4();
//object user
// setUser(sessionId,user);
//res.cookie("uid",sessionId);

// jwt auth
const token=setUser(user);
res.cookie("uid",token);
//end
    return res.redirect("/");
    }

module.exports={
    handleUserSignUp,
    handleUserLogin,
}