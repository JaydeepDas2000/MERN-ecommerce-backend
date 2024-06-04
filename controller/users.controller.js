const UserModel = require('../models/users.model');

// create user (Register)
const createUser = async(req, res) => {
    try {
        let user = new UserModel(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        res.status(201).send(result)
    } catch (error) {
        if(error.name = 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).send(messages);
        }
        res.status(400).send(error);
    }
}

// get all users
const getUsers = async(req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error);
    }
}

// login user
const loginUser = async(req, res) => {
    try {
        if(req.body.email && req.body.password) {
            let user = await UserModel.findOne(req.body).select("-password"); // it help to remove password key
            if (user) {
                res.send(user);
            } else {
                res.send({result : "No user found"})
            }
        } else {
            res.send({result : "Need email and password"})
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createUser,
    getUsers,
    loginUser
};