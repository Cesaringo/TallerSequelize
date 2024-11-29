const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Libro = require('./libroModels'); 

const Prestamo = sequelize.define('Prestamo', {
  fechaPrestamo: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  fechaDevolucion: {
    type: DataTypes.DATE,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  libroId: {
    type: DataTypes.INTEGER,
    references: {
      model: Libro,
      key: 'id',
    },
  },
});

module.exports = Prestamo;
