'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('techs', {
      id:         {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true,primaryKey: true},
      name:       {type: Sequelize.STRING,allowNull: false},
      created_at: {type: Sequelize.DATE, allowNull: false },
      updated_at: {type: Sequelize.DATE, allowNull: false }, 
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('techs');

  }
};
