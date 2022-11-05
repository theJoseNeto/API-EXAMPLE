const { Router } = require("express");
const AddressController = require("../controllers/AddressController");
const UserController = require("../controllers/UserController");
const TechController = require("../controllers/TechController");
const ReportController = require("../controllers/ReportController");
const routes = Router();
routes.get('/', (req, res) => res.json({ hello: "world!" }));

routes.get('/users', UserController.index); 
routes.post("/users", UserController.store); 

routes.get('/:user_id/addresses', AddressController.index);
routes.post('/:user_id/addresses', AddressController.store);

routes.get('/:user_id/techs', TechController.index);
routes.post('/:user_id/techs', TechController.store)

routes.get("/report", ReportController.show);
module.exports = routes;
