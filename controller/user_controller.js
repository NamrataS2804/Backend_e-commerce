
const usersModel = require('../models/users');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function registerUser(req,res){
    const {name, phone,password} = req.body;
    var saltRounds = 10;

    var hashPassword = await bcrypt.hash(password, saltRounds)

    console.log(hashPassword);

    try{
    const newUser =  usersModel({name,phone,password:hashPassword});

    await newUser.save();

    res.status(201).json({
        status:1,
        message:'User created successfully',
        newUser
    })

}catch(error){
    res.status(500).json({error})
}
}




async function loginUser(req, res) {
    const { phone, password } = req.body;
    try {
      const user = await usersModel.findOne({ phone });
      if (!user) {
        return res
          .status(404)
          .json({
            message:
              "User not found with this number please enter valid mobile number ",
          });
      }
      const decryptPassword = await bcrypt.compare(password, user.password);
      console.log(decryptPassword);
      console.log(user.password);
  
      if (decryptPassword) {
        var token = jwt.sign(
          {
            id: user._id,
            phone: user.phone,
          },
          "privatekey",
          { expiresIn: "365d" }
        );
  
        return res.status(200).json({
          message: "user found successfully",
          user,
          token,
        });
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }


module.exports = {
    registerUser,
    loginUser
}
