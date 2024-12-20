const productsModel = require('../models/product')

async function addProducts(req,res){
    const {name,price,disprice,description,img,categaryType,quantity} = req.body;
    

    try{

        if(!name || !price || !disprice || !description  || !categaryType || !quantity){
            return res.status(400).json({message: "Please fill all fields."})
        }
        var product = productsModel({
            name,price,disprice,description,img,categaryType,quantity
        });

    await product.save();
    res.json({message: "Product added successfully", product: product});
}catch(error){
    res.status(500).json({error})
}
}
async function getAllProducts(req,res){
    try{
        const products = await productsModel.find().populate('categaryType','name').populate('quantity')
        
        res.json({message: "Product added successfully", product: products});
    }catch(error){
        res.status(500).json({error})
    }    
}


module.exports = {
    addProducts,
    getAllProducts
    
}
