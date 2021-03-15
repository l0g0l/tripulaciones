const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

// esquema de prueba

//const userSchema = new Schema ({
//     username: "",
//     nombre:"",
//     password: "",
//     email:"",
//     dni:"",
// })

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true

    },
    name: {
        type: String,
        trim: true
    },
    dni: {
        type: String,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        trim: true
    },
    
    luzonesTotal: {
        type: Number,
        trim: true
    },
    luzonesLast: {
        type: Number,
        trim: true
    },
    payby: {
        card: {
        type: Boolean,
        trim: true
        },
        paypal: {
        type:  Boolean,
        trim: true
        },
        ccc: {
        type:  Boolean,
        trim: true
        },
        cripto: {
        type:  Boolean,
        trim: true
        }
    },
   

   
  
})



module.exports = mongoose.model('users',userSchema)