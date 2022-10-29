const Address = require("../models/addressModel")
const Users = require("../models/usersModel");

module.exports = {
    async index(req, res) {

        const {user_id} = req.params; 
        const user = await Users.findByPk(user_id, {include: {association: 'addresses'}}); // included address into query to get addresses associated with user
        if(!user) return res.json({error: "user not found"});

        return res.json(user); 
        
    },
     
    async store(req, res) {
        const { zipcode, street, number } = req.body;
        const { user_id } = req.params;

        const user = await Users.findByPk(user_id); 
        if (!user) return res.status(401).json({ error: 'User Not found' });

        const address = await Address.create({
            zipcode, street, number, user_id
        }); 

        return res.json(address);   
    }
}