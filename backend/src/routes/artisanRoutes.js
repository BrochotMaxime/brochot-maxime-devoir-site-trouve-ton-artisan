const express = require('express');
const artisanController = require('../controllers/artisanController');

const router = express.Router();

router.get('/', artisanController.getAllArtisans);
router.get('/top', artisanController.getTopArtisans);
router.get('/search', artisanController.searchArtisans);
router.get('/:id', artisanController.getArtisanById);

module.exports = router;