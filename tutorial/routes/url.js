const express= require('express');
const router= express.Router();
const {handleGenerateNewShortURL,handleGetAnalytics}=require('../controller/url');

router.post("/",handleGenerateNewShortURL);

//analytic route

router.get("/analytics/:shortId",handleGetAnalytics);
module.exports=router;