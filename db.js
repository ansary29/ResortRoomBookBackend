const mongoose = require('mongoose');

var mongoURL = "mongodb+srv://ansary29:moham29@myproject.12hak.mongodb.net/";

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser : true})
    
var connection = mongoose.connection;
    
connection.on('error', () => {  
    console.log("MongoDB Connection Failed");
})

connection.on('connected', () => {
    console.log("MongoDB Connected Successfully");
})

module.exports = mongoose
