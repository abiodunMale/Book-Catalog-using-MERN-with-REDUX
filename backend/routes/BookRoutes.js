const router = require('express').Router();
const { addBook, allBook, updateBook, deleteBook } = require('../controller/bookController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, allBook);
router.post('/add', addBook);
router.put('/update/:id', authMiddleware, updateBook);
router.delete('/delete/:id', authMiddleware, deleteBook);

module.exports = router;