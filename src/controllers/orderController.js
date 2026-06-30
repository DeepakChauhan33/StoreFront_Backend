

const Orders = require("../models/orders");




const placeOrder = (req, res) => res.render('orderForm');





const createOrder = async (req, res) => {

  const { products, totalAmount } = req.body;
  const user = req.user.userId;

  try {

    const newOrder = await Orders.create({
      user,
      products,
      totalAmount
    })

    res.status(201).json(newOrder);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};





const getOrders = async (req, res) => {

  try {

    const orders = await Orders.find();

    res.status(200).json(orders);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }

}





module.exports = {

  createOrder,
  placeOrder,
  getOrders

}