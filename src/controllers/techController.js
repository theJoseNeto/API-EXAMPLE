const Tech = require('../models/techModel');
const User = require('../models/usersModel');

module.exports = {
    async index(req, res) {
    },
    async store(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = User.findByPk(user_id); 
        if (!user) return res.status(400).json({error: "user not found"});

        const [tech] = await Tech.findOrCreate({where: {name}});

        await user.addTech(tech);
        return res.json(tech);

    },
}