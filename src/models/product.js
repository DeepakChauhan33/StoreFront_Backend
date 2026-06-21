const mongoose = require('mongoose');
const { schema } = require('./user');

const productSchema = new mongoose.Schema(

  {
    _id: {
      type: Number,
      required: true
    },


    title: {
      type: String,
      required: true,
      trim: true
    },

    price: {
      type: String,
      required: true,
      min: 0
    },

    description: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    stock: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      required: true,
    },

    rating: {
      rate: { type: Number, required: true, min: 0, max: 5 },
      count: { type: Number, required: true, min: 0 }
    }

  }
);



const product = mongoose.model("product", productSchema);

module.exports = product;