const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const orderSchema = new Schema({
 ordername: { type: String, unique: true, index: true }, 
 credit: { type: Number, default: 0 } 
})
const ModelClass = mongoose.model('Order', orderSchema)
module.exports = ModelClass 