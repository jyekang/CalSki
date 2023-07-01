const express = require('express');
const router = express.Router();
const { getAllResorts, getAllResortsById, createResort, updateResort, deleteResort } = require('../controllers/resortController');

const path = require('path');

router.get('/getAllResorts', getAllResorts);
router.post('/getAllResorts', createResort);
router.get('/getAllResorts/:id', getAllResortsById);
router.put('/getAllResorts/:id', updateResort);
router.delete('/getAllResorts/:id', deleteResort);

module.exports = router;


