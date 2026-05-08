const productModel = require('../models/productModel');
// Get Products API = /api/v1/products
exports.getProducts  = async (req,res,next) => {

    const products =  await productModel.find({});
    
    res.json({
        success:true,
        products
    });
}
// Get e Single Product API - /api/v1/products/id
exports.getSingleProduct  = async (req,res,next) => {
    // console.log(req.params.id + " " + "ID");
    try{
        const product = await  productModel.findById(req.params.id);
        res.json({
            success:true,
            product
        })   
    }
    catch(error){
        res.status(404).json({
            success:false,
            message:'Invalid Id',
            
        })
    }
 
}
