const mongoose = require('mongoose');

var mongoURL = process.env.uri;

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser : true})
    
var connection = mongoose.connection;
    
connection.on('error', () => {  
    console.log("MongoDB Connection Failed");
})

connection.on('connected', () => {
    console.log("MongoDB Connected Successfully");
})

module.exports = mongoose
