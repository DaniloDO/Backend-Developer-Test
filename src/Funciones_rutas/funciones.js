import connection from "express-myconnection";

//Crear blogs en base de datos
export const createFunction = (req, res) => {
    let body = req.body;
    let {titulo, autor, descripcionGrafica, contenido} = req.body;
    let {imagen, categoria, fechaPublicacion, usuario} = req.body;

    req.getConnection((err, connection) => {
        if(err) {
            res.send(err);
            return next(err);
        }
        connection.query(`INSERT INTO Post (Titulo, Autor, DescripcionGrafica, Contenido, Imagen, Categoria, FechaPublicacion, Usuario) VALUES ('${titulo}', '${autor}', '${descripcionGrafica}', '${contenido}', '${imagen}', '${categoria}', '${fechaPublicacion}', '${usuario}')`, (err, data) =>{
            if(err){
                console.log(err);
                res.send(err);
                return next(err)
            }
            res.send(data)
        });
    });
};

//Leer blogs en base de datos
export const readFunction = (req, res, next) => {
    let titulo = req.params.titulo;

    req.getConnection((err, connection) => {
        if(err) {
            console.log(err)
            res.send(err);
            return next(err);
        }
        connection.query(`SELECT ${titulo} FROM Post`, (err, data) =>{
            if(err){
                console.log(err);
                res.send(err);
                return next(err)
            }
            console.log(data);
            res.send(data)
        });
    });
};

//Editar blogs en base de datos
export const updateFunction = (req, res) => {
    let titulo = req.params.titulo;
    let body = req.body;

    req.getConnection((err, connection) => {
        if(err) {
            res.send(err)
            return next(err);
        }
        connection.query(`UPDATE Post SET Autor = '${autor}', DescripcionGrafica = '${descripcionGrafica}', Contenido = '${contenido}', Imagen = '${imagen}', Categoria = '${categoria}', FechaPublicacion = '${fechaPublicacion}', Usuario = '${usuario}' WHERE ${titulo}`, (err, data) =>{
            if(err){
                console.log(err);
                res.send(err);
                return next(err)
            }
            res.send(data)
        });
    });
 
};

//Borrar blogs en base de datos
export const deleteFunction = (req, res) => {
    let titulo = req.params.titulo;

    req.getConnection((err, connection) => {
        if(err){
            res.send(err);
            return next(err);
        }
        connection.query(`DELETE FROM Post WHERE ${titulo}`, (err, data) =>{
            if(err){
                console.log(err);
                res.send(err);
                return next(err)
            }
            res.send(data)
        });
    });  
};