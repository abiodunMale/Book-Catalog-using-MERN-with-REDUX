const router = require('express').Router();
const { addBook, allBook, findBook } = require('../controller/bookController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, allBook);
router.post('/add', addBook);
router.put('/find/:id', authMiddleware, findBook);

module.exports = router;