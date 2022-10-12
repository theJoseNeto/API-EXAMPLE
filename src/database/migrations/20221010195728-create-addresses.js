'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('addresses', {
      id: {

        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,

      },

      user_id: {
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: {model: "users", key: 'id'},
        onUpdate: "CASCADE", 
        onDelete: "CASCADE"
      },  

      zipcode: {

        type: Sequelize.STRING,
        allowNull: false,

      },

      street: {

        type: Sequelize.STRING,
        allowNull: false

      },

      number: {

        type: Sequelize.INTEGER,
        allowNull: false

      },

      created_at: {

        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }


    });
  },

  async down(queryInterface, Sequelize) {

    return queryInterface.dropTable('users');
  }
};
