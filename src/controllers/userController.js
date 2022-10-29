const { username } = require("../config/database")
const Users = require("../models/usersModel");

module.exports = {
    async index(req, res) {
        const users = await Users.findAll();
        if(!users) return res.status(401).json({error: "users not found"})
        return res.json(users); 
    }, 

    async store (req, res) {
        const {name, email} = req.body; 
        const userCreated = await Users.create({name, email});
        return res.json(userCreated)
    }

}