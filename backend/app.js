const express = require('express')
const cors = require('cors')
const Port = 5000;
const dotenv = require('dotenv')
const app = express();
const empRoute = require('./routes/empRoute')

app.use(express.json())
app.use(cors())
app.use('/',empRoute)
app.use(express.static("uploads"));
require('./db')
dotenv.config({path:'./config.env'})

app.listen(Port,()=>{
    console.log(`running at ${Port}`)
});