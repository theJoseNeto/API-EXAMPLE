require("dotenv").config();
require('./database');
const express = require("express"); 
const routes = require("./routes/index.routes");
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({extended:true}))

app.use(routes)

app.listen(3333, ()=> console.log('running'));
