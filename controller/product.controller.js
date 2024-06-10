const ProductModel = require('../models/product_list.model');

const addProduct = async(req, res) => {
    try {
        let product = new ProductModel(req.body);
        let result = await product.save();
        res.status(201).send(result)
    } catch (error) {
        if(error.name = 'ValidationError') {
            const message = Object.values(error.errors).map(val => val.message);
            return res.status(400).send(message);
        }
        res.status(400).error(error);
    }
}

module.exports = {
    addProduct
};