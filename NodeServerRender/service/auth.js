//authentication
//const sessionIdToUserMap= new Map();
//jwt
const jwt= require('jsonwebtoken');
const secret="mush@123";
function setUser(user){
    //sessionIdToUserMap.set(id,user);
   
    return jwt.sign(user,secret);
}

function getUser(id){
   return sessionIdToUserMap.get(id);
}

module.exports={
    setUser,
    getUser,
}