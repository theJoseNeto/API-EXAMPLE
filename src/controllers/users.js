const Users = require("../models/users");

module.exports = {

    async index(req, res) {
        let result;
        const users = await Users.findAll();
        if (!users) result = res.json({ re: "Not found users" });
        else result = res.json(users);
        return result;

    },

    async store(req, res) {

        const { name, email } = req.body;
        const EmailAlreadyExists = Users.findOne({ where: { email: email } });


        const users = await Users.create({ name, email });

        return res.json(users);
    }
}