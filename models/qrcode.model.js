const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const userSchema = new Schema({
 username: { type: String, unique: true, index: true }, 
 credit: { type: Number, default: 0 } 
})
const ModelClass = mongoose.model('Qrcode', userSchema)
module.exports = ModelClass 