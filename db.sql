CREATE TABLE alumnos (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellidos VARCHAR(50),
    instrumento VARCHAR(20),
    foto VARCHAR(100),
    email VARCHAR(100),
    telefono VARCHAR(15)
);

CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);
