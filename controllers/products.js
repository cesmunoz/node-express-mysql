function Controller() {
    this.getAll = function(req, res) {
        res.status(200).send('Listado de productos');
    }

    this.getById = function(req, res) {
        res.status(200).send('Obtner un elemento por el id');
    }

    this.post = function(req, res) {
        res.status(200).send('Guardar una nuevo producto');
    }

    this.put = function(req, res) {
        res.status(200).send('Actualizar un producto por id');
    }

    this.deleteById = function(req, res) {
        res.status(200).send('Eliminar un product por id');
    }
}

module.exports = Controller;