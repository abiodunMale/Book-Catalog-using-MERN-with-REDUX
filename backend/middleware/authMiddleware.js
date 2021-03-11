const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const authMiddleware = async (req, res, next) => {

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        let token;
        try {
            token = req.headers.authorization.split(' ')[1];
            req.user = await userModel.findById(jwt.decode(token, process.env.JWT_SECRET_KEY).id);
            next();
        } catch (error) {
            return res.status(401).json({success: false, message: "Not authorized, invalid token"});
        }
    }else{
        return res.status(500).json({success: false, message: "Not authorized, provide a token [Bearer xxx]"});
    }
};

module.exports = authMiddleware;