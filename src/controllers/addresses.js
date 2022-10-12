const Addresses = require("../models/address");
const Users = require("../models/users");


module.exports = {
    async store(req, res) {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;
        const user = Users.findByPk(user_id);
        if (!user) return res.status(400).json({ error: "User not found" })

        const address = await Addresses.create({
            zipcode,
            street,
            number,
            user_id
        });
        return res.status(200).json(address)
    },

    async index(req, res) {
        const { user_id } = req.params;
        const user = await Users.findByPk(user_id, {
            include: {
                association: "addresses"
            }
        });

        return res.json(user); 
    }
}