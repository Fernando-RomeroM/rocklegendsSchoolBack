const { Client } = require('pg');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
    ssl: process.env.DB_SSL === 'true'
});

client.connect(err => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected to database');

        const users = [
            { username: 'LaBrie', password: 'cantante' },
            { username: 'Petrucci', password: 'guitarrista' },
            { username: 'Myung', password: 'bajista' }
        ];

        users.forEach(user => {
            bcrypt.hash(user.password, 10, (err, hash) => {
                if (err) {
                    console.error('Error hasheando la contraseña:', err);
                } else {
                    console.log(`Contraseña hasheada para ${user.username}:`, hash);
                    // Aquí actualizamos la contraseña en la base de datos
                    client.query('UPDATE users SET password = $1 WHERE username = $2', [hash, user.username], (err, res) => {
                        if (err) {
                            console.error(`Error actualizando la contraseña para ${user.username}`, err.stack);
                        } else {
                            console.log(`Contraseña actualizada para el usuario ${user.username}`);
                        }
                    });
                }
            });
        });

        // Cerrar la conexión después de un retraso para asegurarse de que todas las consultas se completen
        setTimeout(() => client.end(), 5000);
    }
});
