const express = require('express');
const PrestamoController = require('../controller/PrestamoController');

const router = express.Router();

router.post('/prestamos', PrestamoController.crearPrestamo);
router.get('/prestamos', PrestamoController.obtenerPrestamos);
router.get('/prestamos/:id', PrestamoController.obtenerPrestamoPorId);
router.put('/prestamos/:id', PrestamoController.actualizarPrestamo);
router.delete('/prestamos/:id', PrestamoController.eliminarPrestamo);

module.exports = router;
