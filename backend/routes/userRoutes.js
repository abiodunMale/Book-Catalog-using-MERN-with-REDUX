const router = require('express').Router();
// const expressAsyncHandler = require('express-async-handler');
const { registerUser, loginUser } = require('../controller/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);


module.exports = router;