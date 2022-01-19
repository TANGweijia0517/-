const express = require('express')
const app = express();
const cors = require("cors")
const mongoose = require('mongoose')

app.use(cors());
app.use(express.json());


//mongoose
mongoose.connect("mongodb+srv://project:project@cluster0.rvhud.mongodb.net/notesDB");

//check connect
let db= mongoose.connection;
db.once('open',function(){
  console.log("connect to mogodb")
})

//check db
db.on('error',function(err){
  console.log(err);
})

app.use('/',require('./routes/noteRoute'));

app.listen(3001,function(){
    console.log("express run in port 3001");
})