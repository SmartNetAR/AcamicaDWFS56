create table medicamentos ( codigo int auto_increment, marca varchar(30), nombre varchar(30) not null, droga varchar(30), primary key (codigo)  );

INSERT INTO medicamentos ( marca, nombre, droga ) VALUES ( "Tafirol", "tafirol", "paracetamol" );

SELECT codigo, marca, droga FROM medicamentos;