const mongoose = require('mongoose')

//Define mongodb URL
const mongooseURL = 'mongodb://127.0.0.1:27017/hotels' //can replace hotels with any name

//establish connection
mongoose.connect(mongooseURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true //mandatory parameters for error free connection
})

//mongoose maintains a default connection object representing the MongoDB connection
//acts like a bridge between nodejs and mongodb
const db = mongoose.connection;

//event listeners
db.on('connected',()=>{
    console.log("DB is connected")
})

db.on('erorr',(err)=>{
    console.log("DB connection error")
})

db.on('disconnected',()=>{
    console.log("DB is disconnected")
})

module.exports = db;