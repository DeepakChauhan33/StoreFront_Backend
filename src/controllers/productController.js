
const Products = require('../models/product');




// Product adding form

const getProductForm = (req, res) => res.render('productForm');


// Adding Product in Database
const productRegister = async (req, res) => {
  try {

    const {
      _id,
      title,
      price,
      description,
      category,
      stock,
      image,
      rating
    } = req.body;

    const newProduct = await Products.create({
      _id,
      title,
      price,
      description,
      category,
      stock,
      image,
      rating
    });

    res.status(201).json(newProduct);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




// Fetching Prodocts form Database
const getProducts = async (req, res) => {

  try {

    const products = await Products.find();

    res.status(200).json(products);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }

}


const getProductById = async (req, res) => {

  try {

    const id = req.params;

    console.log(id);

    const product = Products.findOne({ id });

    res.status(200).json(product);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}






module.exports = {
  getProductForm,
  productRegister,
  getProducts,
  getProductById

}