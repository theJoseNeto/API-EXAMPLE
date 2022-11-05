const {DataTypes, Model} = require("sequelize");

class Address extends Model{ 
    static init(sequelize){
        super.init({
            street: DataTypes.STRING, 
            zipcode: DataTypes.STRING, 
            number: DataTypes.INTEGER,
        },{sequelize}); 
    }

    static associate(model){
        this.belongsTo(model.User, {foreignKey: "user_id", as: "addresses"});
    }
}

module.exports = Address;