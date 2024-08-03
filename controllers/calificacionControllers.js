const client = require('../db');

exports.addCalificacion = async (req, res) => {
    try {
        const { alumno_id, user_id, estado } = req.body;
        const result = await client.query(
            'INSERT INTO calificaciones (alumno_id, user_id, estado) VALUES ($1, $2, $3) RETURNING *',
            [alumno_id, user_id, estado]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCalificacionByAlumnoId = async (req, res) => {
    try {
        const { alumnoId } = req.params;
        const result = await client.query(
            'SELECT estado FROM calificaciones WHERE alumno_id = $1 ORDER BY fecha DESC LIMIT 1',
            [alumnoId]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ estado: 'Sin calificación' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
