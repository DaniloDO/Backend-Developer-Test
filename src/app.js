//Importar modulos
import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
import myconnection from "express-myconnection";

import * as dotenv from "dotenv";
dotenv.config();

import router from "./Rutas/rutas.js";

const app = express();
const port = process.env.PORT;

//Conexion con base de datos
const dbConfig = {
    "host": process.env.DATABASE_HOST,
    "user": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "port": process.env.DATABASE_PORT,
    "database": process.env.DATABASE_NAME
};

//Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(myconnection(mysql, dbConfig, "single"));
app.use("/CRUD", router);

//Separación de dos lineas para datos en json 
app.set("json spaces", 2);

//Comprobación de puerto
app.listen(port, () => console.log(`Puerto activo: ${port}`));

//Comprobación de servidor
app.get("/", (req, res) => res.send("Servidor activo"));