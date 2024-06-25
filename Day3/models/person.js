const mongoose = require('mongoose')

//define person schema(details)

const personSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    }
    ,
    age:{
        type: Number,
        required: true
    }
    ,
    occupation:{
        type: String,
        options : ["doctor", "engineer", "technician"]
    }
    ,
    email: {
        type: String,
        required: true,
        unique: true
    }

})

//create model
//models is like blueprint

const person = mongoose.model('person', personSchema);
module.exports = person