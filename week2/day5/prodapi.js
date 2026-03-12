//create mini express appli
import exp from 'express'
export const prodApp = exp.Router();


/*
create product api with:
create new prod({prod id, name,brand,price})  done
read all prods           done
read all prods by brand   
update a prod            done
delete a prod by id       done
*/



//test data
let products =[]


//create new prod({prod id, name,brand,price})
prodApp.post('/products',(req,res)=>{
    //get prod from client
    const newProd = req.body
    //push prod into products
    products.push(newProd)
    //send res
    console.log({message:"product added"})
}
    )



 //read all products
prodApp.get('/products',(req,res)=>{
    //read all prods and send res
    res.json({message:"all products",payload:products})
}
    )   


 //read prods by brand
prodApp.get('/products/:brand',(req,res)=>{
    //get brand from url
    let brandOfUrl = req.params.brand;
    //filter products by brand
    let prodsByBrand = products.filter(productObj => productObj.brand === brandOfUrl);
    //if no products found
    if(prodsByBrand.length === 0){
        return res.json({message:"no products found for this brand"});
    }
    //send response
    res.json({message:`products of brand ${brandOfUrl}`, payload:prodsByBrand});
});


 //update prods
prodApp.put('/products',(req,res)=>{
    // get modified data from client
    let modifiedProd = req.body
    //get index of existing prod in products array
   let index = products.findIndex(productObj=>productObj.pid===modifiedProd.pid)
    //if prod not found
    if(index===-1){
        return res.json({message:"product not found" })
    }
    //update prod with index
    products.splice(index,1,modifiedProd)
    //send res
    res.json({message:"product updated"})

}
    )


 
 //delete a prod
prodApp.delete('/products/:pid',(req,res)=>{
    //get pid from url
    let pidOfUrl = Number(req.params.pid)
    //find index
    let index= products.findIndex(productObj=>productObj.pid===pidOfUrl)
    //if not found
    if(index===-1){
        return res.json({message:"product not found"})
    }
    //delete
    products.splice(index,1)
    //send res
    res.json({message:"product deleted"})
 })
