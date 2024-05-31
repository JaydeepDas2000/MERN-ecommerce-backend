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
        type : Number,
        require : true
    },
    brand: {
        type: String,
    },
    category: {
        type: String
    }
})

export default product_listSchema;