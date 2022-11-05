const { Op } = require("sequelize")
const User = require("../models/userModel")

module.exports = {
    async show(req, res){
        const users = await User.findAll({
            attributes: ["name", "email"], 
            where: {
                email: {
                    [Op.iLike] : "%@gmail.com"
                }
            }, 
            include: [
                {association: "addresses", where: {street: "rua dos bobos"}},
                {association: "techs",
                required: false, 
                where: {
                   name: { [Op.iLike]: "React%"}
                }}
            ]
        })

        return res.json(users)
    }
}