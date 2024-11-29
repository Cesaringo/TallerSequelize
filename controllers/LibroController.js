let LibroService = require('../services/LibroService');

class LibroController {
    async obtenerLibros(req, res){
        try {
            let libros = await LibroService.obtenerLibros();
            res.json(libros);
        } catch (error) {
            res.json({error: 'Error al obtener libros'});
        }
    }

    async crearLibro(req, res){
        try {
            let nuevoLibro = await LibroService.crearLibro();
            res.json(nuevoLibro);
        } catch (error) {
            res.json({error: 'error al crear el libro'})
        }
    }

    async actualizarLibro(req, res){
        try {
           let { id } = req.params;
           libroActualizado = await LibroService.actualizarLibro(id, req.body);
           res.json(libroActualizado)
        } catch (error) {
            res.json({error: 'error al actualizar'});
        }
    }

    async eliminarLibro(req, res){
       try {
        let { id } = req.params;
        let resultado = await LibroService.eliminarLibro(id);
        res.json(resultado);
       } catch (error) {
        res.json({error: 'error al eliminar libro'});
       }
    }
}

module.exports = new LibroController();