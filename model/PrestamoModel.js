const Datatypes = require('sequelize');
const sequelizeBiblioteca = require('../config/db');
const Usuario = require('./UsuarioModel');
const Libro = require('./LibrosModel')

const Prestamo = sequelizeBiblioteca.define('Prestamo',{
    fechaPrestamo:{
        type: Datatypes.DATE,
        allowNull: false,
       
    },
    fechaDevolucion:{
        type: Datatypes.DATE,
        allowNull: true,
    }
},{
    timestamps: false,
    tableName:'prestamo',
});

module.exports = Prestamo;