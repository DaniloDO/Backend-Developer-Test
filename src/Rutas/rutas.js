
import {Router} from "express";

import * as crudFunctions from "../Funciones_rutas/funciones.js";

const router = Router();

//Pagina bienvenida de operaciones CRUD
router.get("/", (req, res) => {res.send("Operaciones CRUD")});

//Crear blogs en base de datos
router.post("/Create", crudFunctions.createFunction);

//Leer blogs en base de datos
router.get("/Read/:titulo", crudFunctions.readFunction);

//Editar blogs en base de datos
router.put("/Update/:titulo", crudFunctions.updateFunction);

//Borrar blogs en base de datos
router.delete("/Delete/:titulo", crudFunctions.deleteFunction);

export default router;