let secureApi = ( req, res, next)=>{
    console.log("ami")

    if(req.headers.authorization == "kijdhts4^&4#2"){
        next();
    }else{
        res.send({error:"invalid api"})
    }
}


module.exports = secureApi;