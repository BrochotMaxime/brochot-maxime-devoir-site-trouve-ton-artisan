const express = require('express');
const contactController = require('../controllers/contactController');
const validateContact = require('../middlewares/validateContact');

const router = express.Router();

router.post('/', validateContact, contactController.sendContactMessage);

module.exports = router;