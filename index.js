//Import
const suma = require("./Modulos/Suma");
//console.log(suma(50, 60));

const multiplicacion = require("./Modulos/Multiplicacion");
//console.log(multiplicacion(50, 60));

const resta = require("./Modulos/Resta");
//console.log(resta(50, 60));

const path = require("path");
const bodyParser = require("body-parser");

//instalar libreria express
// npm install express

//1 importar la libreria express
const express = require("express");

//2 instanciar un objeto de tipo server /applicacion a partir de express
const app = express();
//establecer un midleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//3 declar un puerto variable que guarde el puerto
const port = 3000;

//~4 crear una ruta http
app.get("/", (req, res) => {
  //res.send("Hola mundo");
  res.sendFile(path.join(__dirname, "./Views/index.html"));
});
//Callback function
app.get("/suma/:numeroA/:numeroB", (req, res) => {
  //console.log(req.params);

  //Get parametros
  let numA = parseFloat(req.params.numeroA);
  let numB = parseFloat(req.params.numeroB);

  //Calcula la suma
  let result = suma(numA, numB);

  //Envia el respone astatus code: 200 y data en json
  res.status(200).json(result);
});
app.post("/sumar", (req, res) => {
  console.log(req.body.a);
  console.log(req.body.b);
  
  res.status(200).json("Hola");
});

// inicializar el listener del servidor
app.listen(port, () => {
  console.log("Server start on http://localhost:" + port);
});
