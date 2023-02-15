const jwt = require('jsonwebtoken');
const {secret} = require('../config');

module.exports = function(req,res, next){
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(400).json({message:"User not!.."});
        }

        jwt.verify(token,secret,(err, decodeData)=>{
            if (err) return res.sendStatus(403);
            req.user = decodeData;
            next();
        });
    } catch (error) {
        
    }
}