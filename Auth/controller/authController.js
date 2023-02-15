const User = require("../model/User");
const Role = require("../model/Role");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const secret = require('../config');

const {validationResult} = require("express-validator");

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }

    return jwt.sign(payload, secret.secret, {expiresIn: "24h"})
}

class authController {

    async registration(req, res){

        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Errors", errors})
            }

            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({message: "User exists..."})
            }

            const hashPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({value: "USER"})

            const user = new User({username, password: hashPassword, role: [userRole.value]})
            await user.save()
            res.json({message: "user successfully created"})



        } catch (error) {
            
        }
    }

    async login(req,res){
        try {
            const {username, password} = req.body;
            const user = await User.findOne({username});
            
            const validPassword = bcrypt.compareSync(password,user.password);
            if(!validPassword){
                res.status(400).json({message:"Password wrong!"});
            }

            const token = generateAccessToken(user._id);

            return res.json({token});
        } catch (error) {
            
        }
    }

    async getUsers(req,res){
        try {
            // const userRole=new Role();
            // const adminRole=new Role({value:"ADMIN"});

            // await userRole.save();
            // await adminRole.save();
            // res.json(userRole);

            const users = await User.find();
            res.json(users);
        } catch (error) {
            
        }
    }
}

module.exports = authController