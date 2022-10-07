const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products=>{
    res.status(200).json({products,success:true})
  }).catch(err=>{res.status(500).json(err)})
}
