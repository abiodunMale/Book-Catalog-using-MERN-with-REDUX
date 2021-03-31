const router = require('express').Router();
const { addBook, allBook, updateBook, deleteBook, bookDetails } = require('../controller/bookController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', allBook);
router.post('/add', authMiddleware, addBook);
router.get('/detail/:id', authMiddleware, bookDetails);
router.put('/update/:id', authMiddleware, updateBook);
router.delete('/delete/:id', authMiddleware, deleteBook);

module.exports = router;