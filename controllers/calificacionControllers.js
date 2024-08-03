const client = require('../db');

// Controlador para agregar una calificación
exports.addCalificacion = async (req, res) => {
    try {
        const { alumno_id, user_id, calificacion } = req.body;
        const result = await client.query(
            'INSERT INTO calificaciones (alumno_id, user_id, calificacion) VALUES ($1, $2, $3) RETURNING *',
            [alumno_id, user_id, calificacion]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Controlador para obtener todas las calificaciones (opcional)
exports.getCalificaciones = async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM calificaciones');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
