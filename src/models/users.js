const { Model, DataTypes } = require("sequelize");
const Addresses = require("./address");

class Users extends Model {
   static init(sequelize){
        super.init({
            name: DataTypes.STRING, 
            email: DataTypes.STRING
        }, {sequelize}); 
    }

    static associate(models){
        this.hasMany(models.Addresses, {foreignKey: 'id', as: "addresses"})
    }
}

module.exports = Users; 