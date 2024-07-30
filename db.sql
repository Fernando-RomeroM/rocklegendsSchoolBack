CREATE TABLE alumnos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    instrumento VARCHAR(20),
    foto VARCHAR(100),
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(15)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL -- Asegúrate de almacenar contraseñas hasheadas
);
