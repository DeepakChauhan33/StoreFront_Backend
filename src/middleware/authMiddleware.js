
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

  try {

    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Please login"
      });
    }

    const decode = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decode;

    console.loh("authentic");
    next()

  } catch (error) {
    return res.status(401).json({
      message: "Invalid token"
    })
  }
}


module.exports = authMiddleware;