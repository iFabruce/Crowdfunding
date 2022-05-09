const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController');

router.get('/select', baseController.select);
router.put('/insert', baseController.insert);
router.post('/update', baseController.update);
router.delete('/del', baseController.del);



module.exports = router
