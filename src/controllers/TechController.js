const Tech = require("../models/techModel");
const User = require("../models/userModel");

module.exports = {
    index: async function (req, res) {
        const {user_id} = req.params; 
        const user = await User.findByPk(user_id, {
            include: {association: "techs"}
        });
        if(!user) return res.json({err:"cannot list users. User not found"}); 
        


    },
    store: async function (req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);
        console.log(user);
        if (!user) return res.json({ error: "user not found" });
        const [tech] = await Tech.findOrCreate({ where: { name } });

        await user.addTechs(tech);

        res.json(tech);
    }
};
