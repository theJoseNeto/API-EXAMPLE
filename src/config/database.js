require('dotenv').config(); 

module.exports = {
    dialect: process.env.DIALECT,
    host: 'localhost',
    username: process.env.UNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
      timestamps: true,
      underscored: true,
    },
  };
