const express = require('express');
const dotenv = require('dotenv')
const sequelizeBiblioteca = require ('./config/db')
const PORT = process.env.PORT
const usuarioRoutes = require('./routes/usuarioRoutes');
const libroRoutes = require('./routes/libroRoutes');
const prestamoRoutes = require('./routes/prestamoRoutes');
dotenv.config();
const app = express();

app.use(express.json());

// Rutas
app.use('/api', usuarioRoutes);
app.use('/api', libroRoutes);
app.use('/api', prestamoRoutes);

let startDB = async() =>{
  try {
     await sequelizeBiblioteca.sync();
      console.log('base de datos sincronizada');
     app.listen(PORT, () =>{
      console.log(`Server is running on port ${PORT}`)
  });
  }
  catch (e){
      console.log("Erro al conectar con la base de datos")
  }
};
startDB();

