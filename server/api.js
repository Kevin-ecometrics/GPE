/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");
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

const transporter = nodemailer.createTransport({
  host: "host11.registrar-servers.com",
  port: 465,
  secure: true,
  auth: {
    user: "direccion@gpeconsultores.com.mx",
    pass: "G3P3E32024*1$gpe",
  },
});

// Rutas
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

      const mailOptions = {
        from: "direccion@gpeconsultores.com.mx",
        to: email,
        cc: "direccion@gpeconsultores.com.mx",
        subject: "Gracias por suscribirte a GPE Consultores",
        text: `Hola, Gracias por suscribirte a nuestra newsletter. Nos alegra tenerte con nosotros.
      
      Tu correo electrónico registrado es: ${email}
      
      Recibirás información valiosa y actualizaciones directamente en tu bandeja de entrada.
      
      Saludos cordiales,
      El equipo de GPE Consultores`,
      };

      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          console.error("Error enviando el correo de suscripción:", err);
          res.status(500).send({ message: "Error en el servidor" });
          return;
        }
        console.log(`Correo de suscripción enviado a: ${email}`);
        res.status(200).send({
          message: "Suscripción exitosa",
        });
      });
    });
  } else {
    res.status(400).send({ message: "Email es requerido" });
  }
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (name && email && message) {
    const query = "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)";
    connection.query(query, [name, email, message], (err) => {
      if (err) {
        console.error("Error insertando el mensaje en la base de datos:", err);
        res.status(500).send({ message: "Error en el servidor" });
        return;
      }

      const mailOptions = {
        from: "direccion@gpeconsultores.com.mx",
        to: email,
        cc: "direccion@gpeconsultores.com.mx",
        subject: "Gracias por contactar a GPE Consultores",
        text: `Hola ${name},

        Gracias por ponerte en contacto con nosotros. Nos alegra tenerte con nosotros.
        
        Tu correo electrónico registrado es: ${email}
        
        Hemos recibido el siguiente mensaje de tu parte:
        "${message}"
        
        Apreciamos tu mensaje y te responderemos a la brevedad posible.
        
        Saludos cordiales,
        El equipo de GPE Consultores`,
      };

      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          console.error("Error enviando el correo de contacto:", err);
          res.status(500).send({ message: "Error en el servidor" });
          return;
        }
        res.status(200).send({
          message: "Mensaje enviado correctamente",
        });
      });
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
