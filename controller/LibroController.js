const LibroService = require('../service/LibroService');

const LibroController = {
  crearLibro: async (req, res) => {
    try {
      const nuevoLibro = await LibroService.crearLibro(req.body);
      res.json(nuevoLibro);
    } catch (e) {
      res.json({ error: error.message });
    }
  },
  obtenerLibros: async (req, res) => {
    try {
      const libros = await LibroService.obtenerLibros();
      res.json(libros);
    } catch (e) {
      
    }
  },
  obtenerLibroPorId: async (req, res) => {
    try {
      const libro = await LibroService.obtenerLibrosPorId(req.params.id);
      if (!libro)
         return res.json({ error: 'Libro no encontrado' });
      res.status(200).json(libro);
    } catch (e) {
      
    }
  },
  actualizarLibro: async (req, res) => {
    try {
      const libro = await LibroService.actualizarLibro(req.params.id, req.body);
      res.json(libro);
    } catch (e) {

    }
  },
  eliminarLibro: async (req, res) => {
    try {
      await LibroService.eliminarLibro(req.params.id);
      res.status(204).send();
    } catch (e) {

    }
  },
};

module.exports = LibroController;
