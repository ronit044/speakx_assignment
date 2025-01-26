const express = require('express');
const { searchByTitle, getById } = require('../controllers/questionController');

const router = express.Router();
router.get('/search', searchByTitle);
router.get('/:id', getById);

module.exports = router;
