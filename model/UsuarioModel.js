const Datatypes = require('sequelize');
const sequelizeBiblioteca = require('../config/db');
//const Prestamo = require('../model/PrestamoModel');
//const Libro = require('..model/LibrosModel');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

const Usuario = sequelizeBiblioteca.define('Usuario',{
    nombre:{
        type: Datatypes.STRING,
        allowNull: false,
    },
    email:{
       type: Datatypes.STRING,
       allowNull: false,
       unique:true,
       validate:{
        isEmail:true,
       },
    },
},{
    timestamps: false,
    tableName:'usuarios',
});

module.exports = Usuario;