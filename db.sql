CREATE TABLE alumnos (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellidos VARCHAR(50),
    instrumento VARCHAR(20),
    foto VARCHAR(100),
    email VARCHAR(100),
    telefono VARCHAR(15)
);

-- INSERT INTO alumnos (id, nombre, apellidos, instrumento, foto, email, telefono) VALUES
-- (1, 'Carlos', 'García', 'guitarra', 'carlos_garcia.jpg', 'carlos.garcia@example.com', '555-1234'),
-- (2, 'María', 'López', 'bajo', 'maria_lopez.jpg', 'maria.lopez@example.com', '555-5678'),
-- (3, 'Pedro', 'Martínez', 'batería', 'pedro_martinez.jpg', 'pedro.martinez@example.com', '555-8765'),
-- (4, 'Ana', 'Pérez', 'voz', 'ana_perez.jpg', 'ana.perez@example.com', '555-4321'),
-- (5, 'Luis', 'González', 'guitarra', 'luis_gonzalez.jpg', 'luis.gonzalez@example.com', '555-6789'),
-- (6, 'Elena', 'Gómez', 'bajo', 'elena_gomez.jpg', 'elena.gomez@example.com', '555-9876'),
-- (7, 'Javier', 'Fernández', 'batería', 'javier_fernandez.jpg', 'javier.fernandez@example.com', '555-5432'),
-- (8, 'Laura', 'Sánchez', 'voz', 'laura_sanchez.jpg', 'laura.sanchez@example.com', '555-2345'),
-- (9, 'Miguel', 'Ramírez', 'guitarra', 'miguel_ramirez.jpg', 'miguel.ramirez@example.com', '555-6780'),
-- (10, 'Carmen', 'Torres', 'bajo', 'carmen_torres.jpg', 'carmen.torres@example.com', '555-3456'),
-- (11, 'Antonio', 'Flores', 'batería', 'antonio_flores.jpg', 'antonio.flores@example.com', '555-9012'),
-- (12, 'Beatriz', 'Ruiz', 'voz', 'beatriz_ruiz.jpg', 'beatriz.ruiz@example.com', '555-4567'),
-- (13, 'Sergio', 'Vargas', 'guitarra', 'sergio_vargas.jpg', 'sergio.vargas@example.com', '555-7890'),
-- (14, 'Natalia', 'Castro', 'bajo', 'natalia_castro.jpg', 'natalia.castro@example.com', '555-6543'),
-- (15, 'Andrés', 'Ortega', 'batería', 'andres_ortega.jpg', 'andres.ortega@example.com', '555-3210'),
-- (16, 'Patricia', 'Jiménez', 'voz', 'patricia_jimenez.jpg', 'patricia.jimenez@example.com', '555-9870'),
-- (17, 'Fernando', 'Molina', 'guitarra', 'fernando_molina.jpg', 'fernando.molina@example.com', '555-4320'),
-- (18, 'Lorena', 'Delgado', 'bajo', 'lorena_delgado.jpg', 'lorena.delgado@example.com', '555-2340'),
-- (19, 'Iván', 'Ramos', 'batería', 'ivan_ramos.jpg', 'ivan.ramos@example.com', '555-8901'),
-- (20, 'Rosa', 'Navarro', 'voz', 'rosa_navarro.jpg', 'rosa.navarro@example.com', '555-3450');
