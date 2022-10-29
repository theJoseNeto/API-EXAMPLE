const { Router } = require("express");
const routes = Router();

const { index: listUsers, store: storeUser } = require('../controllers/userController');
const { index: listAddresses, store: storeAddress } = require('../controllers/addressController');
const {store: storeTech, index : lisTechs} = require('../controllers/techController');

routes.get('/', (req, res) => res.json({ hello: "world!" }));

routes.post('/users', storeUser);
routes.get('/users', listUsers);

routes.post("users/:user_id/addresses", storeAddress);
routes.get('users/:user_id/addresses', listAddresses);

routes.get('/users/:user_id/techs', lisTechs);
routes.post('/users/:user_id/techs', storeTech); 

module.exports = routes;
