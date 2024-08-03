const client = require('../db');

exports.getCalificaciones = async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM calificaciones');
        res.json(result.rows);
    } catch (err) {
        console.error('Error obteniendo calificaciones:', err);
        res.status(500).json({ error: err.message });
    }
};

exports.getCalificacionByAlumnoId = async (req, res) => {
    try {
        const { alumno_id } = req.params;
        const result = await client.query('SELECT * FROM calificaciones WHERE alumno_id = $1', [alumno_id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error obteniendo calificación por alumno_id:', err);
        res.status(500).json({ error: err.message });
    }
};

exports.updateCalificacion = async (req, res) => {
    try {
        const { alumno_id, user_id, estado } = req.body;
        console.log('Datos recibidos:', { alumno_id, user_id, estado });

        // Asegurarse de que todos los datos necesarios estén presentes
        if (!alumno_id || !user_id || !estado) {
            console.error('Datos faltantes:', { alumno_id, user_id, estado });
            return res.status(400).json({ error: 'Faltan datos requeridos' });
        }

        // Ejecutar la consulta
        const result = await client.query(
            `INSERT INTO calificaciones (alumno_id, user_id, estado) 
             VALUES ($1, $2, $3) 
             ON CONFLICT (alumno_id) 
             DO UPDATE SET estado = EXCLUDED.estado`,
            [alumno_id, user_id, estado]
        );

        console.log('Resultado de la consulta:', result);
        res.json({ message: 'Calificación actualizada' });
    } catch (err) {
        console.error('Error actualizando calificación:', err);
        res.status(500).json({ error: err.message });
    }
};
