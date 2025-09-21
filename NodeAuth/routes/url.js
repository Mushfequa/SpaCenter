const express= require("express");

const {handleGenrateNewShortId,handleGetAnalytics} = require("./controllers/url");

const router= express.Router();

router.post("/",handleGenrateNewShortId);

router.get("/analytics/:shortId",handleGetAnalytics);
module.exports=router;