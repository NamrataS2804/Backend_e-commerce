const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    
    name:{
        type:String,    
        required:true
    },
    price:{
        type:Number,    
        required:true
    },
    
    disprice:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:false,
        default:2
    },
    description:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:false
    },
    categaryType:{
            type:mongoose.Schema.Types.ObjectId,   
            required:true,
            ref: 'categary'
        },
        quantity:{
            type:Number,
            required:true,


        }
   
})
module.exports = mongoose.model('product',productSchema)