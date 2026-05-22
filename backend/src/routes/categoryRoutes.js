const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/', categoryController.getAllCategories);
router.get('/:id/artisans', categoryController.getArtisansByCategory);

module.exports = router;