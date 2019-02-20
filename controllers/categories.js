var service = require('../services/categories');

function Controller() {
    this.getAll = function (req, res) {
        service.getAll(req, res);
    }

    this.getById = function (req, res) {
        var id = req.body.id;

        if (!id) {
            res.status(404).send('Categoria no encontrada');
            return;
        }

        service.getById(id);
    }

    this.post = function (req, res) {
        service.post(req.body)
    }

    this.put = function (req, res) {
        service.put(req.body);
    }

    this.deleteById = function (req, res) {
        var id = req.body.id;

        if (!id) {
            res.status(404).send('Categoria no encontrada');
            return;
        }

        service.deleteById(id)
    }
}

module.exports = Controller;