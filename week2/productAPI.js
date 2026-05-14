// Create mini express application

import exp from "express";

// Create router object
export const prodApp = exp.Router();

/*
Create Product APIs:

1. Add new product
2. Read all products
3. Read products by brand
4. Update product
5. Delete product by id
*/

// Temporary array for storing products
let products = [];


//1. Create New Product

prodApp.post("/products", (req, res) => {
  // Get new product data from client
  const newProd = req.body;

  // Add product into array
  products.push(newProd);

  // Send response
  res.json({ message: "Product added" });
});


//2. Read All Products

prodApp.get("/products", (req, res) => {
  // Send all products
  res.json({
    message: "All products",
    payload: products,
  });
});


//3. Read Products By Brand

prodApp.get("/products/:brand", (req, res) => {
  // Get brand from URL
  let brandOfUrl = req.params.brand;

  // Filter products based on brand
  let prodsByBrand = products.filter(
    (productObj) => productObj.brand === brandOfUrl
  );

  // If no products found
  if (prodsByBrand.length === 0) {
    return res.json({
      message: "No products found for this brand",
    });
  }

  // Send filtered products
  res.json({
    message: `Products of brand ${brandOfUrl}`,
    payload: prodsByBrand,
  });
});


//4. Update Product

prodApp.put("/products", (req, res) => {
  // Get modified product data
  let modifiedProd = req.body;

  // Find product index using pid
  let index = products.findIndex(
    (productObj) => productObj.pid === modifiedProd.pid
  );

  // If product not found
  if (index === -1) {
    return res.json({
      message: "Product not found",
    });
  }

  // Replace old product with updated product
  products.splice(index, 1, modifiedProd);

  // Send response
  res.json({
    message: "Product updated",
  });
});


//5. Delete Product By ID
prodApp.delete("/products/:pid", (req, res) => {
  // Get pid from URL
  let pidOfUrl = Number(req.params.pid);

  // Find product index
  let index = products.findIndex(
    (productObj) => productObj.pid === pidOfUrl
  );

  // If product not found
  if (index === -1) {
    return res.json({
      message: "Product not found",
    });
  }

  // Delete product
  products.splice(index, 1);

  // Send response
  res.json({
    message: "Product deleted",
  });
});