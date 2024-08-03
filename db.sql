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

-- Aquí va la tabla de las calificaciones
CREATE TABLE calificaciones (
    id SERIAL PRIMARY KEY,
    alumno_id INT REFERENCES alumnos(id),
    user_id INT REFERENCES users(id),
    estado VARCHAR(10) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

