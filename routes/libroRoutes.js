const express = require('express');
const LibroController = require('../controller/LibroController');

const router = express.Router();

router.post('/libros', LibroController.crearLibro);
router.get('/libros', LibroController.obtenerLibros);
router.get('/libros/:id', LibroController.obtenerLibroPorId);
router.put('/libros/:id', LibroController.actualizarLibro);
router.delete('/libros/:id', LibroController.eliminarLibro);

module.exports = router;
