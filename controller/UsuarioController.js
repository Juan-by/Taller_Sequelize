const UsuarioService = require('../service/UsuarioService');

const UsuarioController = {
    crearUsuario: async (req,res) => {
        try{
            const nuevoUsuario = await UsuarioService.crearUsuario(req.body);
            res.json({nuevoUsuario});             
        }catch(error){
           res.json({error: error.message})
        }
    },
    obtenerUsuario: async (req,res) => {
        try{
            const usuario = await UsuarioService.obtenerUsuario(req.params.id);
            res.json({usuario})
        }catch(e){
            
        }
    },
    obtenerUsuarioPorId: async (req,res) =>{
        try{
            const usuario = await UsuarioService.obtenerUsuarioPorId(req.params.id);
            if (!usuario) 
                return res.json({error:'usuario no encontrado'})
            res.json({usuario});
        }catch(e){

        }
    },
    actualizarUsuario:async (req,res) =>{
        try{
            const usuario = await UsuarioService.actualizarUsuario(req.params.id,req.body);
            res.json({usuario});
        }catch(e){

        }
    },
    eliminarUsuario:async (req,res) =>{
        try{
            const usuario = await UsuarioService.eliminarUsuario(req.params.id);
            res.json({message: 'usuario eliminado'});
        }catch(e){}
    },

};
module.exports = UsuarioController;