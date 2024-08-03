const { Client } = require('pg');
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
        client.query('SELECT * FROM users WHERE username = $1', ['LaBrie'], (err, res) => {
            if (err) {
                console.error('Error executing query', err.stack);
            } else {
                console.log('User:', res.rows[0]);
            }
            client.end();
        });
    }
});
