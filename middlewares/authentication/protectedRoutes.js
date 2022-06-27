const jwt = require("jsonwebtoken")
const { UNAUTHORIZED_USER } = require("../errors/index.error")

async function protectedRoutes (req,res,next){
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decodedToken =  jwt.verify(token,process.env.TOKEN_KEY)
        console.log(decodedToken);
        res.locals.decodedToken = decodedToken;
        return next();
    }catch(error){
        return res.status(401).json({error: UNAUTHORIZED_USER})
    }
}

module.exports = {
    protectedRoutes
}