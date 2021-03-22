const router = require('express').Router();
// const expressAsyncHandler = require('express-async-handler');
const { registerUser, loginUser, profile, Updateprofile } = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, profile);
router.put('/update-profile', authMiddleware, Updateprofile);


module.exports = router;