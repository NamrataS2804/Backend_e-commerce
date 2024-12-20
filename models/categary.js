const mongoose = require('mongoose');
const CategarySchema = new mongoose.Schema({
   
    
    name:{
        type:String,    
        required:true
    },
    
})
module.exports = mongoose.model('categary',CategarySchema)