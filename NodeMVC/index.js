const express =require("express");

const {connectMongoDb}= require('./connection');

const {logReqRes} = require('./middlewares');

const userRouter =require("./routes/user");

const app = express();
const PORT= 8000;



















