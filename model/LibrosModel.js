const DataTypes = require('sequelize');
const sequelizeBiblioteca = require('../config/db');
const Prestamo = require('./PrestamoModel');


const Libro = sequelizeBiblioteca.define('Libro',{
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    disponibilidad:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:true,
    },
    añoPublicacion:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

},{
    tableName:'libros',
    timestamps: true,
});


module.exports = Libro;