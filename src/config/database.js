require('dotenv').config();

module.exports = {
    dialect: 'postgres', 
    host: 'localhost', 
    database: process.env.DB_NAME, 
    username: process.env.DB_UNAME,
    password: process.env.DB_PASSWORD, 
    define: {
        timestamps: true, 
        underscored: true
    }
};
