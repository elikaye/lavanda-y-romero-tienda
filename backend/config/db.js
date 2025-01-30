// backend/config/db.js
const mysql = require("mysql2");

// Crear la conexión
const db = mysql.createConnection({
  host: "localhost", // o tu host de MySQL
  user: "root", // tu usuario de MySQL
  password: "", // tu contraseña de MySQL
  database: "tienda-lavanda", // el nombre de tu base de datos
});

// Verificar conexión
db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos: ", err);
  } else {
    console.log("Conexión a la base de datos establecida.");
  }
});

module.exports = db;
