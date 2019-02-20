var service = require('../services/categories');

var srv = new service();

function Controller() {

    this.getAll = async (req, res) => {
        var result = await srv.getAll();
        res.status(200).send(JSON.stringify(result));
    }

    this.getById = (req, res) => {
        var id = req.body.id;

        if (!id) {
            res.status(404).send('Categoria no encontrada');
            return;
        }

        service.getById(id);
    }

    this.post = (req, res) => {
        service.post(req.body)
    }

    this.put = (req, res) => {
        service.put(req.body);
    }

    this.deleteById = (req, res) => {
        var id = req.body.id;

        if (!id) {
            res.status(404).send('Categoria no encontrada');
            return;
        }

        service.deleteById(id)
    }
}

module.exports = Controller;