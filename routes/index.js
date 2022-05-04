const express = require ('express');
const router = express.Router();

const HeroeController = require ('../controllers/HeroeController');

router.get('/', HeroeController.index);

router.get('/detalle/:heroe', HeroeController.details);

router.get('/publisher/:publisher', HeroeController.publisher)




module.exports = router;