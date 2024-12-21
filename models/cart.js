const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "product",
  },
  quantity: {
    type: Number,
    required: true,
  },

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
});
module.exports = mongoose.model("cart", CartSchema);
