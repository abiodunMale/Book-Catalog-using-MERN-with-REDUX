const bcrypt = require('bcryptjs');

const userModel = require('../model/userModel');
const generateToken = require('../utils/generateToken');

exports.registerUser = async (req, res) => {
    const request = req.body;

    try {
        const userExists = await userModel.findOne({email: request.email});
        if(userExists){
            return res.status(500).json({message: "user already exist"});
        }

        const newuser = new userModel(request);
        await newuser.save();

        return res.json({message: "Successfully registered", data: newuser })
    } catch (error) {
        return res.status(500).json({message:"an error occured "+error});
    }
};

exports.loginUser = async (req, res) => {

    const {email, password} = req.body;

    try {

        const user = await userModel.findOne({email : email});

        if(user && (await bcrypt.compare(password, user.password))){

            return res.json(
                {
                    id: user._id, 
                    name: user.name, 
                    email: user.email,
                    token: generateToken(user._id)
                }
            );
        }else{
            return res.status(401).json({message: "invalid credentials"});
        }

    } catch (error) {
        return res.status(500).json({message:"an error occured "+error});
    }
};

exports.profile = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id).populate('books');
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message:"an error occured" +error});
    }
};

exports.Updateprofile = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.user._id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        return res.status(200).json({message: 'Profile successfully updated', data: user});
    } catch (error) {
        return res.status(500).json({message:"an error occured" +error});
    }
};