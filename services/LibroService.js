let Libro = require('../models/libroModels');

class LibroService {
    async obtenerLibros(){
        try {
            return await Libro.findAll();
        } catch (error) {
            console.error('Error al obtener libros:', error);
            console.log("error");
        }
    }

    async crearLibro(data){

        try {
            return await Libro.create(data)
        } catch (error) {
            console.error('Error al crear libro:', error);
            throw new Error("Error al crear libro")
        }
        
    }

    async actualizarLibro(id, data){
       try {
        let libro = await Libro.findByPk(id);
        if (libro){
            return await libro.update(data);
        } else {
            throw new Error('Libro no encontrado');
        }
       } catch (error) {
        console.error('Error al actualizar libro:', error);
        throw new Error("Error al actualizar el libro: ", error)
       }
    }

    async eliminarLibro(id) {
        try {
            let libro = await Libro.findByPk(id);
            if(libro){
                await libro.destroy();
                return { mensaje: 'Libro eliminado correctamente'};
            } else {
                throw new Error('Libro no encontrado');
            }
        } catch (error) {
            console.error('Error al eliminar libro:', error)
            throw new Error('Error al eliminar libro: ', error);
        }
    }
}

module.exports = new LibroService();