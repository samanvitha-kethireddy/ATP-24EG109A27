//create mini-express appli(they dont have http instance(server)) (seperate routes)
import exp from 'express'
import { UserModel } from '../models/userModel.js';
import { compare, hash } from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middleware/verifytoken.js';
const{sign} = jwt
export const userApp= exp.Router()


//define user rest api routes


//create new user
   userApp.post("/users",async(req,res)=>{
    //get new user obj from req
    const newUser =req.body;
    //hash the password-->use bcrypt.js
    const hashedpassword =  await hash(newUser.password,10)
    //replace the plain password with hashed password
    newUser.password=hashedpassword;
    //create new user doc
    const newUserDoc = new UserModel(newUser)
    //save
    const result= await newUserDoc.save();
    console.log("result :" , result)
   //send res
   res.status(201).json({message:"user created"})   //201 represents succesful resource creation
   })


//read all users 
  userApp.get("/users",verifyToken, async(req,res)=>{
     //read all users from db
     let usersList = await UserModel.find()
     //send res
     res.status(200).json({message:"all users", payload: usersList})
  })   


//read one user
userApp.get("/user",verifyToken,async (req,res)=>{
    //read usermail from req
    const emailOfUser = req.user?.email;
    // console.log(emailOfUser) for verification
    //find user by id
    const userObj = await UserModel.findOne({email: emailOfUser}).populate("cart.product");
    console.log(userObj)
    //if user not there
    if(!userObj){
       return res.status(404).json({message:"user not found"})
    }
    //send res
    res.status(200).json({message:"user: ", payload: userObj})
}) 

//update a user by id
userApp.put("/users/:id",verifyToken, async (req,res)=>{
    //get modified user from req
    const modifiedUser = req.body;
    const uid= req.params.id;
    //find user by id & update
    const updatedUser= await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true, runValidators:true});
    //send res
    res.status(200).json({message:"user modified", payload:updatedUser})
})


//delete a user by id
userApp.delete("/users/:id",verifyToken, async(req,res)=>{
    const uid=req.params.id;
    const deletedUser = await UserModel.findByIdAndDelete(uid);
    if(!deletedUser){
     return res.status(404).json({message:"user not found"})
        }
    res.status(200).json({message:"user deleted", payload:deletedUser})
})


//user auth
userApp.post('/auth',async(req,res)=>{
    //get user cred obj from client
    const {email,password}=req.body
    //verify mail
    let user= await UserModel.findOne({email:email})
    //if email doesnt exist
    if(!user){
        return res.status(400).json({message:"invalid email"})
    }
    //if there, compare passwords
    let result = await compare(password,user.password)
    //if not matched
    if(!result){
        return res.status(400).json({message:"invalid password"})
    }
    //if valid, give token
    //create token
    const signedToken = sign({email:user.email}, process.env.SECRET_KEY,{expiresIn:"1h"})
    //store token as http only cookie
    res.cookie("token",signedToken,{
        httpOnly: true,
        sameSite:"lax",
        secure:false
    })
    //send token in res
    res.status(200).json({message:"login successful", payload:user})
})


//app.use(verifyToken)->will execute for every req
//userApp.get(path,verifyToken,req-handler)->will exe for 

//add prod to cart
userApp.put("/cart/productId/:pid",verifyToken, async(req,res)=>{
 //get prod id from url param
 let productId = req.params.pid;
 //get current user details
 const emailOfUser = req.user?.email;
 //add prod to cart
 let result = await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
 //if user invalid
 if(!result){
    return res.status(404).json({message:"user not found"})
 }
 res.status(200).json({message:"prod added to cart"})

})