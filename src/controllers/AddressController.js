const Address = require("../models/addressModel");
const User = require("../models/userModel");

module.exports = {
    index: async function (req, res) { 

        const {user_id } = req.params; 
        const user =  await User.findByPk(user_id, {include: {association: "addresses"}})
        return res.json(user)
    },

    store: async function (req, res) {
        const { zipcode, street, number } = req.body;
        const { user_id } = req.params;
        console.log(user_id);
        const user = await User.findByPk(user_id);

        if (!user) return res.status(401).json({
            error: "Cannot create address, user not found :("
        }); 
        const address = await Address.create({zipcode, street, number, user_id});
        return res.json({address})
    }
};

