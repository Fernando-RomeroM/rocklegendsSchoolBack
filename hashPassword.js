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
    } else {
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
                    
                    // Aquí actualizamos la contraseña en la base de datos
                    client.query('UPDATE users SET password = $1 WHERE username = $2', [hash, user.username], (err, res) => {
                        if (err) {
                            console.error(`Error actualizando la contraseña para ${user.username}`, err.stack);
                        } else {
                            
                        }
                    });
                }
            });
        });

        setTimeout(() => client.end(), 5000);
    }
});
