const service = require('../services/categories');

const srv = new service();

function Controller() {

    this.getAll = async (req, res) => {
        var result = await srv.getAll();
        res.status(200).send(JSON.stringify(result));
    }

    this.getById = (req, res) => {
        const { id } = req.body;

        if (!id) {
            res.status(404).send('Category not found');
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
        const { id } = req.body;

        if (!id) {
            res.status(404).send('Category not found');
            return;
        }

        service.deleteById(id)
    }
}

module.exports = Controller;