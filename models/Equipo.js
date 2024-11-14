const mysql = require('mysql2');

// Crear una conexión a la base de datos MariaDB
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Consultar los equipos
const getEquipos = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM equipos', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Exportar las funciones
module.exports = {
  getEquipos,
};
