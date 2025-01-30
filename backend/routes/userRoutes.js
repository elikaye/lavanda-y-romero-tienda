// backend/routes/userRoutes.js
const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../config/db");
const router = express.Router();

// Registro de usuario
router.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Encriptar la contraseña antes de guardarla
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error al encriptar la contraseña" });
    }

    // Guardar usuario en la base de datos
    const query = "INSERT INTO users (email, password) VALUES (?, ?)";
    db.query(query, [email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error al registrar el usuario" });
      }
      res.status(201).json({ message: "Usuario registrado con éxito" });
    });
  });
});

// Login de usuario
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Buscar el usuario en la base de datos
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error al buscar el usuario" });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    // Comparar la contraseña ingresada con la almacenada
    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(400).json({ message: "Contraseña incorrecta" });
      }
      res.status(200).json({ message: "Login exitoso" });
    });
  });
});

module.exports = router;
