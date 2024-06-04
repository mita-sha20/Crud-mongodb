
var jwt = require('jsonwebtoken');

const authorization = async(req,res,next)=>{
   const token = req.headers.token;

   if(!token){
    res.send("token required")
   } else{
    jwt.verify(token, 'shhhhh', function(err, decoded) {
        console.log(decoded) ;
        if(decoded){
            next()
        }else{
            res.send("valid token required")
        }
      });
   }
}

module.exports = authorization;
