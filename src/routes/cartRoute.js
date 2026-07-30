const express = require("express");
const router = express.Router();

// Controllers
const {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
  clearCart,
} = require("../controllers/cartController");


const authMiddleware = require("../middleware/authMiddleware");


router.post("/add", authMiddleware, addToCart);


router.get("/", authMiddleware, getCart);


router.put("/update", authMiddleware, updateCart);


router.delete("/remove/:productId", authMiddleware, removeFromCart);


router.delete("/clear", authMiddleware, clearCart);

module.exports = router;