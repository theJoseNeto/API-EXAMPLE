const User = require('../models/userModel');

module.exports = {
    index: async function (req, res) {

        const users = await User.findAll();
        return res.json(users);
    },


    store: async function (req, res) {

        const { name, email } = req.body;
        const user = await User.create({ name, email });
        return res.json(user);

    },

    update: async function (req, res) { }
}