'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('user_techs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      user_id: {
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: {model: "users", key: "id"},
        onUpdate: "CASCADE", 
        onDelete: "CASCADE" 
      },

      tech_id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {model: "techs", key:"id"}, 
        onUpdate: "CASCADE", 
        onDelete: "CASCADE"
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });

  },

  async down(queryInterface, Sequelize) {
    
    return queryInterface.dropTable('user_techs');
    
  }
};
