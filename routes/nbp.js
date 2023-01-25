var express = require('express');
var router = express.Router();

const nbpController = require('../controllers/nbpController');
const {getKurs} = require("../controllers/nbpController");

// http://localhost:3000/nbp/
router.get('/', nbpController.getIndex);

// localhost:3000/nbp/kurs/
router.get('/kurs/',nbpController.getKurs);
router.post('/kurs/',nbpController.postKurs);

// localhost:3000/nbp/tabel-kurow
router.get('/tabela-kursow', nbpController.getTable);

module.exports = router;
