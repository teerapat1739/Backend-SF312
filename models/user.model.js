
const mongoose = require('mongoose');   

const Schema = mongoose.Schema;


const userSchema = new Schema({
    user_type: Number,  
    name: String,      
    
   
    username: { type: String, unique: true, index: true },  
    password: String    
})


const ModelClass = mongoose.model('user', userSchema)

module.exports = ModelClass 