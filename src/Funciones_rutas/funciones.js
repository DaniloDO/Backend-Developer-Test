import connection from "express-myconnection";

//Crear blogs en base de datos
export const createFunction = (req, res) => {
    let body = req.body;
    let {titulo, autor, descripcionGrafica, contenido} = req.body;
    let {imagen, categoria, fechaPublicacion, usuario} = req.body;
    //res.send(body)

    req.getConnection((err, connection) => {
        if(err) return next(err);
        connection.query(`INSERT INTO Post (Titulo, Autor, DescripcionGrafica, Contenido, Imagen, Categoria, FechaPublicacion, Usuario) VALUES ('${titulo}', '${autor}', '${descripcionGrafica}', '${contenido}', '${imagen}', '${categoria}', '${fechaPublicacion}', '${usuario}')`, (err, data) =>{
            res.send(data)
        });
    });
};

//Leer blogs en base de datos
export const readFunction = (req, res, next) => {
    let titulo = req.params.titulo;
    //res.send(titulo);

    req.getConnection((err, connection) => {
        if(err) return next(err);
        connection.query(`SELECT ${titulo} FROM Post`, (err, data) =>{
            res.send(data)
        });
    });
};

//Editar blogs en base de datos
export const updateFunction = (req, res) => {
    let titulo = req.params.titulo;
    let body = req.body;
    res.send(body)

    /*req.getConnection((err, connection) => {
        if(err) return next(err);
        connection.query('', (err, data) =>{
            res.send(data)
        });
    });*/
 
};

//Borrar blogs en base de datos
export const deleteFunction = (req, res) => {
    let titulo = req.params.titulo;
    res.send(titulo);

    /*req.getConnection((err, connection) => {
        if(err) return next(err);
        connection.query('', (err, data) =>{
            res.send(data)
        });
    });*/    
};