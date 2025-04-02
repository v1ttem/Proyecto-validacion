CREATE TABLE usuarios (
    id VARCHAR(36) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    dni VARCHAR(20) UNIQUE NOT NULL
);

INSERT INTO usuarios (id, nombre, apellido, dni) 
VALUES ('123e4567-e89b-12d3-a456-426614174000', 'Axel', 'Sergi', '12345678');

INSERT INTO usuarios (id, nombre, apellido, dni) 
VALUES ('123e4567-e89b-12d3-a456-426614174123', 'Martin', 'Mirage', '84753951');