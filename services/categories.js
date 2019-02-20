var db = require('../util/db');

function getAll(req, res) {
    var query = "SELECT * FROM categorias";
    db.query(query, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.status(500).send('Oops! Hubo un error. Reintente más tarde.')
            return;
        }
                
        res.status(200).send(JSON.stringify(result));
    })    
}

function getById(req, res) {
    res.status(200).send('Obtner un elemento por el id');
}

function post(req, res) {
    res.status(200).send('Guardar una nueva categoria');
}

function put(req, res) {
    res.status(200).send('Actualizar una categoria por id');
}

function deleteById(req, res) {
    res.status(200).send('Eliminar una categoria por id');
}

module.exports = {
    getAll: getAll,
    getById: getById,
    post: post,
    put: put,
    deleteById: deleteById
};