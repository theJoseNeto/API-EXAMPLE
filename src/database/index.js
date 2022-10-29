const Sequelize = require("sequelize");  
const dbConfig = require('../config/database'); 

const Users = require("../models/usersModel"); 
const Address = require("../models/addressModel"); 
const Techs = require("../models/techModel");

const connection = new Sequelize(dbConfig);

Users.init(connection);
Address.init(connection); 
Techs.init(connection); 

Users.associate(connection.models);
Address.associate(connection.models);
Techs.associate(connection.models);

module.exports = connection;
