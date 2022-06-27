const mongoose = require('mongoose')

const empSchema =new mongoose.Schema({

    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },    
    Email:{
        type: String,
        required: true
    }, 
     Gender:{
        type: String,
        required: true
    }, 
       MaritalStatus:{
        type: String,
        required: true
    }, 
       BirthDate:{
        type: Date,
        required: true
    },
    Hobbies:{
        type: String,
        required: true
    }, 
    Photo:{
        type: String,
       
    }, 
    Salary:{
        type: Number,
        required: true
    }, 
    Address:{
        type: String,
        required: true
    }, 
    State:{
        type: String,
        required: true
    },   
    City:{
        type: String,
        required: true
    }, 
    ZipCode:{
        type: Number,
        required: true
    }, 
    Country:{
        type: String,
        required: true
    }, 
    Password:{
        type: String,
        required: true
    }
})
const EMP = mongoose.model("EMP",empSchema)
module.exports = EMP;