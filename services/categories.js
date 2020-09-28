const db = require('../util/db');

function Service() {

    this.getAll = async (req, res) => {
        const query = "SELECT * FROM categorias";
        const result = await db.query(query);
        return result;
    }
    
    this.getAll = (req, res) => res.status(200).send('Obtner un elemento por el id');  
    this.post = (req, res) => res.status(200).send('Guardar una nueva categoria');   
    this.put = (req, res) => res.status(200).send('Actualizar una categoria por id');    
    this.deleteById = (req, res) => res.status(200).send('Eliminar una categoria por id');
}


module.exports = Service