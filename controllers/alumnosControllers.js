const client = require ('../db'); // el archivo donde tenemos guardado los datos

exports.getProperties = async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM properties'); // Nos devuelve los datos
        res.json(result.rows);
    }   catch (err) {
        res.status(500).json({ error: err.message});
    }
}