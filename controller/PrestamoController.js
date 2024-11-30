const PrestamoService = require('../service/PrestamoService');

const PrestamoController = {
  crearPrestamo: async (req, res) => {
    try {
      const nuevoPrestamo = await PrestamoService.crearPrestamo(req.body);
      res.json({nuevoPrestamo});
    } catch (e) {
      
    }
  },
  obtenerPrestamos: async (req, res) => {
    try {
      const prestamos = await PrestamoService.obtenerPrestamos();
      res.json({prestamos});
    } catch (e) {
      
    }
  },
  obtenerPrestamoPorId: async (req, res) => {
    try {
      const prestamo = await PrestamoService.obtenerPrestamoPorId(req.params.id);
      if (!prestamo) 
        return res.json({ error: 'Prestamo no encontrado' });
      res.json(prestamo);
    } catch (e) {
      
    }
  },
  actualizarPrestamo: async (req, res) => {
    try {
      const prestamo = await PrestamoService.actualizarPrestamo(req.params.id, req.body);
      res.json(prestamo);
    } catch (e) {
      
    }
  },
  eliminarPrestamo: async (req, res) => {
    try {
      const prestamo = await PrestamoService.eliminarPrestamo(req.params.id);
      res.json(prestamo);
    } catch (e) {
      
    }
  },
};

module.exports = PrestamoController;
