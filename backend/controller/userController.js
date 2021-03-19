const bcrypt = require('bcryptjs');

const userModel = require('../model/userModel');
const generateToken = require('../utils/generateToken');

exports.registerUser = async (req, res) => {
    const request = req.body;

    try {
        const userExists = await userModel.findOne({email: request.email});
        if(userExists){
            return res.status(500).json({success: false, message: "user already exist"});
        }

        const newuser = new userModel(request);
        await newuser.save();

        return res.json({success: true, message: "user registered successfully", data: newuser })
    } catch (error) {
        return res.status(500).json({success: false, message:"an error occured"});
    }
};

exports.loginUser = async (req, res) => {

    const {email, password} = req.body;

    try {

        const user = await userModel.findOne({email : email});

        if(user && (await bcrypt.compare(password, user.password))){
            // return res.json({
            //     success: true, 
            //     message: "login successfully", 
            //     data: {
            //         id: user._id, 
            //         name: user.name, 
            //         email: user.email,
            //         token: generateToken(user._id)
            //     }
            // });

            return res.json(
                {
                    id: user._id, 
                    name: user.name, 
                    email: user.email,
                    token: generateToken(user._id)
                }
            );
        }else{
            return res.status(401).json({success: false, message: "invalid credentials"});
        }

    } catch (error) {
        return res.status(500).json({success: false, message:"an error occured"});
    }
};

exports.profile = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id).populate('books');
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({success: false, message:"an error occured" +error});
    }
};