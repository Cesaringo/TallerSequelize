const { Op } = require('sequelize');
const Libro = require('../models/libroModels');
const Prestamo = require('../models/prestamoModels');
const sequelize = require('sequelize');


const librosMasSolicitados = async (req, res) => {
    try {
      const libros = await Libro.findAll({
       
      });
      res.json(libros);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los libros más solicitados' });
    }
  };


const prestamosRecientes = async (req, res) => {
  try {
    const prestamos = await Prestamo.findAll({
        include: [Libro], 
        order: [['fechaPrestamo', 'DESC']], 
      });

    res.json(prestamos);
  } catch (error) {
    console.error(error);
    res.status(500).json('Error al obtener los préstamos recientes');
  }
};

module.exports = {
  librosMasSolicitados,
  prestamosRecientes,
};
