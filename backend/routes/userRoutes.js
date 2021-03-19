const router = require('express').Router();
// const expressAsyncHandler = require('express-async-handler');
const { registerUser, loginUser, profile } = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, profile);


module.exports = router;