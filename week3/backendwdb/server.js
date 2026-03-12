//create express app
import exp from 'express'
import {connect} from 'mongoose' ;
import { userApp} from './apis/userapi.js'; 
import { prodApp } from './apis/prodapi.js';
import cookieParser from 'cookie-parser';
const app=exp();
import { config } from 'dotenv';
config();

//add body parser
app.use(exp.json())

app.use(cookieParser())
//fwd req to userApp if path starts with /user
app.use('/user-api',userApp)
//fwd req to prodApp if path starts with /prod
app.use('/prod-api',prodApp)
//start server
app.listen(4000,()=>console.log("server on port 4000..."))

//connect to db server
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/mydb")
        console.log("db connection successful")
    } 
    catch(err){
      console.log("err in db connection :",err)
    }
}

connectDB()


//error ==> {name,message,callstack}
//error handling middleware--make sure to put this at the end of code
app.use((err,req,res,next)=>{
    // res.json({message:"error occured",error:err.message}) --> dont use thi. mot specific. 
    console.log("error is ", err)
    //ValidationError--> req values and length
    if(err.name === "ValidationError"){
        return res.status(400).json({message:"error occured"})
    }
    //CastError
    if(err.name === "CastError"){
        return res.status(400).json({message:"error occured"})
    }
    //server-side error
    res.status(500).json({message: "Error occured", error:"server side error"})

})