const Prestamo = require('../model/PrestamoModel');

const PrestamoService = {
  crearPrestamo: async (datos) => {
    const prestamo = await Prestamo.create(datos);
    return prestamo;
  },
  obtenerPrestamos: async () => {
    return await Prestamo.findAll();
  },
  obtenerPrestamoPorId: async (id) => {
    return await Prestamo.findByPk(id);
  },
  actualizarPrestamo: async (id, datos) => {
    await Prestamo.update(datos, { where: { id } });
    return await Prestamo.findByPk(id);
  },
  eliminarPrestamo: async (id) => {
    return await Prestamo.destroy({ where: { id } });
  },
};

module.exports = PrestamoService;
