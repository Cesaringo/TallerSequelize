let DataTypes = require('sequelize');
let sequelize = require('../config/db')

let Libro = sequelize.define('Libro', {
  id: {
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey: true
  },
  Titulo:{
    type: DataTypes.STRING,
      allowNull: false,
  },
  año_publicacion:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  disponibilidad:{
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  fecha_prestamo:{
    type: DataTypes.DATE,
    allowNull: false
  },
  autor:{
    type: DataTypes.STRING,
      allowNull: false,
  },

}, {
  timestamps:false,
tableName: 'libros'
});

module.exports = Libro;