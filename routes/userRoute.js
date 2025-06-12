const express = require('express');
const { registerController, loginController } = require('../controllers/userController');

// Router object
const router = express.Router();

// Routes
// REGISTER || POST
router.post("/register", registerController);
router.post("/login", loginController);



// Export
module.exports = router;
 