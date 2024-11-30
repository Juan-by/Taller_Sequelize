const express = require('express');
const UsuarioController = require('../controller/UsuarioController');

const router = express.Router();

router.post('/usuarios', UsuarioController.crearUsuario);
router.get('/usuarios', UsuarioController.obtenerUsuario);
router.get('/usuarios/:id', UsuarioController.obtenerUsuarioPorId);
router.put('/usuarios/:id', UsuarioController.actualizarUsuario);
router.delete('/usuarios/:id', UsuarioController.eliminarUsuario);

module.exports = router;
