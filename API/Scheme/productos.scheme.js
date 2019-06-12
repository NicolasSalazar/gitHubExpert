const mongoose =require('mongoose');
const {Schema} = mongoose;

const productoScheme = new Schema({
    Nombre:{type:String, required:true},
    Marca: {type:String, required:true},
    Precio: {type:Number, required:true}
})
 

module.exports = mongoose.model('producto', productoScheme);