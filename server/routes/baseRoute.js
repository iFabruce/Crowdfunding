const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController');

router.get('/select', baseController.select);
router.post('/insert', baseController.insert);

module.exports = router
