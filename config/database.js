require('dotenv').config(); // Cargar el archivo .env

const mysql = require('mysql2');

// Crear la conexión a la base de datos utilizando las variables del archivo .env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,        // Usar la variable DB_HOST del .env
  user: process.env.DB_USER,        // Usar la variable DB_USER del .env
  password: process.env.DB_PASSWORD, // Usar la variable DB_PASSWORD del .env
  database: process.env.DB_NAME,     // Usar la variable DB_NAME del .env
  port: 3306
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar: ' + err.stack);
    return;
  }
  console.log('Conectado a la base de datos como id ' + connection.threadId);
});

module.exports = connection;
