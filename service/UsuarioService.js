const Usuario = require('../model/UsuarioModel');

const UsuarioService = {
    crearUsuario: async (datos) => {
        const usuario =  await Usuario.create(datos);
        return usuario;
    },
    obtenerUsuario: async () => {
        return await Usuario.findAll();
    },
    obtenerUsuarioPorId: async (id) => {
        return await Usuario.findByPk(id);
    },
    actualizarUsuario: async (id, datos) => {
        await Usuario.update(datos,{where:{id}});
        return await Usuario.findByPk
    },
    eliminarUsuario: async (id) => {
        return await Usuario.destroy({where:{ id }});
    },

};
module.exports = UsuarioService;