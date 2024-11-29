const express = require('express');
const router = express.Router();
const LibroController = require('../controllers/LibroController');

router.get('/', (req, res) => LibroController.obtenerLibros(req, res));
router.post('/', (req, res) => LibroController.crearLibro(req, res));
router.put('/:id', (req, res) => LibroController.actualizarLibro(req, res));
router.delete('/:id', (req, res) => LibroController.eliminarLibro(req, res));

module.exports = router;