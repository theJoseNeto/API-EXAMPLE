require("dotenv").config();
require("./database");;

const express = require("express"); 
const app = express(); 

const routes = require("./routes/index.routes.js");

app.use(express.json());  
app.use(express.urlencoded({extended:true}))
app.use(routes);

app.listen(3000, ()=> console.log("Listen")); 