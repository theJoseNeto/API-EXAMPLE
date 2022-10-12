const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Users = require("../models/users");
const Addresses = require('../models/address');
const connection = new Sequelize(dbConfig);

Users.init(connection);
Addresses.init(connection); 

Addresses.associate(connection.models);
Users.associate(connection.models)

module.exports = connection;
