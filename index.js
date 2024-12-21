const express = require("express");
const app = express();
const mongoose = require ("mongoose")
const PORT = 1801;

app.use(express.json());
console.log("index file is running");


//import routes

const users = require('./routers/user_routers');
const admin = require('./routers/admin_routers');
const categary = require('./routers/categary_routers');
const product = require('./routers/product_routers');
const cart = require('./routers/cart_routes');

//middleware

app.use("/api/users",users);
app.use("/api/admin",admin);
app.use("/api/categary",categary);
app.use("/api/product",product);
app.use("/api/cart",cart);

app.listen(PORT, () => {
    console.log(`Server started at port http://localhost:${PORT}`);
  });
  //connect to mongoDB
  mongoose
    .connect(
      "mongodb+srv://user:namrata2804@cluster0.x7yxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Connected to MongoDb");
    })
    .catch((err) => {
      console.log("Error Connecting to MongoDb");
    });
  