const {DataTypes, Model} = require("sequelize"); 

class Techs extends Model {
    static init(sequelizeDbConnection) {
        super.init({
            name: DataTypes.STRING, 
        }, {sequelize: sequelizeDbConnection});
    }; 

    static associate(models){
        this.belongsToMany(models.Users, {foreignKey: "tech_id", through: 'user_techs', as: 'users'})
    }
}

module.exports = Techs;

