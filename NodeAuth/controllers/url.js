const URL = require('./models/url');

const shortId = require("shortId");

async function handleGenrateNewShortId(req,res){

    const shortID= shortId();

    await URL.create({
        shortId:shortID,
        redirectURL:ReportBody.url,
        visitHistory:[],
    });
    return res.json({id:shortID});

}

async function handleGetAnalytics(req,res){

    const shortId = req.params.shortId();

    const result = await URL.findOne({shortId});

    return res.json({totalClicks:result.visitHistory,analytics:result.visitHistory
        ,
    });

}
module.exports={
    handleGenrateNewShortId,
    handleGetAnalytics,
}