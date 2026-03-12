import exp from 'express'
import {ProdModel} from '../models/prodModel.js';
export const prodApp = exp.Router();


//create new prod
prodApp.post("/prods",async(req,res)=>{
    //get new prod obj from req
    const newProd = req.body;
    //create new prod doc
    const newProdDoc = new ProdModel(newProd)
    //save
    const result = await newProdDoc.save();
    console.log("result: " , result)
     res.status(201).json({message:"prod created"}) 
})


//read all prods
prodApp.get("/prods",async(req,res)=>{
    //read from db
    let prodList = await ProdModel.find()
    //send res
    res.status(200).json({message:"all products",payload: prodList})
})

//read prod by pid
prodApp.get("/prod/:id",async(req,res)=>{
    //get id from req params
    const pid= req.params.id
    //find prod by id
    const prodObj = await ProdModel.findById(pid)
    //if not there
    if(!prodObj){
        return res.status(400).json({message:"product not found"})
    }
    //send res
    res.status(200).json({message:"product: ",payload:prodObj })
})


//update a prod by id
prodApp.put("/prods/:id",async (req,res)=>{
    //get modified prod dets
    const modifiedProd= req.body;
    const pid=req.params.id;
    //find & update prod
    const updatedProd = await ProdModel.findByIdAndUpdate(pid,{$set:{...modifiedProd}},{new:true, runValidators:true})
    //send res
    res.status(200).json({message:"product modified",payload:updatedProd})
})

//delete a prod by id
prodApp.delete("/prods/:id", async(req,res)=>{
    const pid= req.params.id
    const deletedProd = await ProdModel.findByIdAndDelete(pid)
    if(!deletedProd){
        return res.status(400).json({message:"product not found"})
    }
    res.status(200).json({message:"product deleted", payload:deletedProd})
})
