const client = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'No queremos Posers en nuestra escuela' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.loginUser = async (req, res) => { // Corrección en la definición de la función
    try {
        const { username, password } = req.body;
        const result = await client.query('SELECT * FROM users WHERE email = $1', [email]); // Asegúrate que la tabla se llama 'users' y no 'user'
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'No queremos Posers en nuestra escuela' });
        }
        const user = result.rows[0];
        const validPassword = await bcrypt.compare(password, user.password); // Comprobar la contraseña
        if (!validPassword) {
            return res.status(404).json({ error: 'No queremos Posers en nuestra escuela' });
        }
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || "screto", { expiresIn: '1h' }); // Usa una variable de entorno para la clave secreta
        res.json({ token, userId: user.id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
