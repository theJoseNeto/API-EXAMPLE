const {Router} = require("express");
const routes = Router(); 

const userController = require('../controllers/users');
const addressController = require("../controllers/addresses");

routes.get("/", (req, res)=> res.json({hello: 'world'}));
routes.get("/users", userController.index)
routes.get('/:user_id/address', addressController.index);

routes.post("/users", userController.store); 
routes.post('/:user_id/address', addressController.store);

module.exports = routes;
