import Product from "../models/product.model.js";
import mongoose from "mongoose";


export const getProducts = async(req,res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json({success:true,data:products});
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({success:false,message:"Server Error"});
    }
};

export const createProduct = async(req,res)=>{
    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success:false, message: "Please provide all fields"})
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({status:true, data: newProduct});
    } catch (error) {
        console.error("Error in creating new product", error.message);
        res.status(500).json({status:false, message:"Server Error"});
    }
};

export const updateProduct = async(req,res)=>{
    const {id} = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid Product ID"})
    }

    try {
        const updateProduct = await Product.findByIdAndUpdate(id, product, {new:true});    
        res.status(200).json({success:true,data:updateProduct});
    } catch (error) {
        console.log("error in updating products:",error.message);
        res.status(500).json({success:false, message: "Server Error"});
        
    }
};

export const deleteProduct = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid Product ID"})
    }

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({success: false, message: "Product not found"});
        }
        res.status(200).json({success:true, message:"Product Deleted"});
    } catch (error) {
        console.log("Error in deleting the product", error.message);
        res.status(500).json({success:false, message:"Server Error"});        
    }
}