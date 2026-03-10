import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';


// function for add products to database
const addProduct = async (req, res) => {

    try {
        const { name, description, price, category,subCategory,sizes,bestseller } = req.body;
        const image1 = req.files.image1 && req.files.image1[0] ? req.files.image1[0] : null;
        const image2 = req.files.image2 && req.files.image2[0] ? req.files.image2[0] : null;
        const image3 = req.files.image3 && req.files.image3[0] ? req.files.image3[0] : null;
        const image4 = req.files.image4 && req.files.image4[0] ? req.files.image4[0] : null;
        const images = [image1, image2, image3, image4].filter(image => image !== null);
        let imageUrls = await Promise.all(
            images.map(async (item) => {
            let result = await cloudinary.uploader.upload(item.path,{resource_type: 'image'});
            return result.secure_url;
        }));

        

 
        // const imageUrls = [];
        // for (const key in images) {
        //     const file = images[key][0];
        //     const result = await cloudinary.uploader.upload(file.path);
        //     imageUrls.push(result.secure_url);
            
        // }
        // const newProduct = new productModel({
        //     name,
        //     description,
        //     price,
        //     category,
        //     subCategory,
        //     image: imageUrls,
        //     sizes: JSON.parse(sizes),
        //     bestSeller: bestseller === 'true',
        //     date: Date.now(),
        // });
        // await newProduct.save();
        // res.status(200).json({ message: 'Product added successfully' });
        res.json({})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message:error.message });
    }

}

// function for list all products from database
const listProducts = async (req, res) => {

}

// function for get single product details from database
const singleProduct = async (req, res) => {

}

// function for remove product details in database
const removeProduct = async (req, res) => {

}

export { addProduct, listProducts, singleProduct, removeProduct };