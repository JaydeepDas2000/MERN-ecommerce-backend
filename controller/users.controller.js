const UserModel = require('../models/users.model');

// create user (Register)
const createUser = async(req, res) => {
    try {
        const user = new UserModel(req.body);
        await user.save();
        res.status(201).send(user)
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

module.exports = {
    createUser,
    getUsers
};