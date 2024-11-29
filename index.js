const express = require('express');
const app = express();
const libroRoutes = require('./routes/libroRoutes');
const informesRoutes = require('./routes/informesRoutes');
const sequelize = require('./config/db');
const port = process.env.PORT || 2010;

app.use(express.json())
app.use('/libros', libroRoutes);
app.use('/informes', informesRoutes);

let startDB = async () => {
    try{
      await sequelize.sync();
      console.log('Base de datos sincronizada');
      app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
      });
    }catch(e){
      console.error('ERROR al conectar la Base de Datos', e)
    }
  }
  
  startDB();