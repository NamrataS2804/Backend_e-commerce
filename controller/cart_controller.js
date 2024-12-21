const cartModel = require('../models/cart');


async function createCart(req, res) {

    var user_id =req.id;

    const { product_id} = req.body;

    try {
        const newCart = cartModel({product_id,user_id,quantity:1});
      await  newCart.save();

        res.status(201).json({
            status: 1,
            message: 'Cart created successfully',
            newCart
        })

    } catch (error) {
        res.status(500).json({ error });
    }

}
module.exports = {
    createCart
}
