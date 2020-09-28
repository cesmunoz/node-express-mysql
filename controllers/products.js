function Controller() {
    this.getAll = function(req, res) {
        res.status(200).send('Product Lists');
    }

    this.getById = function(req, res) {
        res.status(200).send('Get Product By Id');
    }

    this.post = function(req, res) {
        res.status(200).send('Save new Product');
    }

    this.put = function(req, res) {
        res.status(200).send('Edit product');
    }

    this.deleteById = function(req, res) {
        res.status(200).send('Delete product by Id');
    }
}

module.exports = Controller;