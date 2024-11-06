/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gpe",
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL");
});

app.post("/newsletter", (req, res) => {
  const { email } = req.body;
  if (email) {
    const query = "INSERT INTO newsletter (email) VALUES (?)";
    connection.query(query, [email], (err) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          res.status(400).send({ message: "El correo ya está registrado" });
        } else {
          console.error("Error insertando el email en la base de datos:", err);
          res.status(500).send({ message: "Error en el servidor" });
        }
        return;
      }
      res.status(200).send({
        message: "Suscripción exitosa",
      });
    });
  } else {
    res.status(400).send({ message: "Email es requerido" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
