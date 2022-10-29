const express = require("express"); 
const app = express(); 
require("dotenv").config();
require('./database/index');

const routes = require("./routes/index.routes.js");

app.use(express.json());  
app.use(express.urlencoded({extended:true}))
app.use(routes);

app.listen(3000, ()=> console.log("Listen")); 