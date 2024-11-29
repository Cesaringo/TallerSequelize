const express = require('express');
const { librosMasSolicitados, prestamosRecientes } = require('../controllers/informesController');

const router = express.Router();


router.get('/libros-mas-solicitados', librosMasSolicitados);
router.get('/prestamos-recientes', prestamosRecientes);

module.exports = router;
