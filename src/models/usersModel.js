const { DataTypes, Model } = require("sequelize");

class Users extends Model {
    static init(sequelizeDbConnection){
        super.init({
            name: DataTypes.STRING, 
            email: DataTypes.STRING, 
        }, {sequelize: sequelizeDbConnection});
    }

    static associate(model){ 
        this.hasMany(model.Address, {foreignKey: 'user_id', as: 'addresses'}); 
        this.belongsToMany(model.Techs, {foreignKey: 'user_id', through: "user_techs", as: 'techs'})
    }
};  

module.exports = Users; 