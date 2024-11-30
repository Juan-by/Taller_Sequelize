const Libro = require('../model/LibrosModel');

const LibroService = {
    crearLibro: async (datos) => {
        const libro = await Libro.create(datos);
        return libro;
    },
    obtenerLibros: async () => {
        return await Libro.findAll();
    },
    obtenerLibrosPorId: async () =>{
        return await Libro.findByPk(id);
    },
    actualizarLibro: async (id, datos) =>{
        await Libro.update(datos,{where:{id}});
        return await Libro.findByPk(id);
    },
    eliminarLibro: async (id) =>{
        return await Libro.destroy({where:{id}});
    },
};
module.exports = LibroService;