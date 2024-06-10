const mongoose = require('mongoose');

// const rounttoTwoDecimalPlaces = (value) => {
//     if (!isNaN(value) && value !== null && value !== undefined) {
//         return parseFloat(value.toFixed(2));
//     }
//     return value
// }
const product_listSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    price : {
        type : String,
        require : true
    },
    category: {
        type: String
    },
    userId: {
        type: String
    },
    Company: {
        type: String
    }
})

const Product = mongoose.model('products', product_listSchema)

module.exports = Product;