// middleware/authMiddleware.js

const loginController = require("../controllers/loginController.js")

const authMiddleware = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 🔴 empty check
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Fill the correct email id and password",
      });
    }

    // 🔍 user find
    const user = await loginController.findOne({ email });

    // 🔴 email not found
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Fill the correct email id and password",
      });
    }

    // 🔴 password mismatch
    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Fill the correct email id and password",
      });
    }

    // ✅ success → user attach
    req.user = user;
    next();

  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports= authMiddleware;
