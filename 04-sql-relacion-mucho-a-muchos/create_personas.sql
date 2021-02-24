--Creo el modelo de la tabla personas
CREATE TABLE `personas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `edad` smallint(6) NOT NULL,
  `fecha` date NOT NULL,
  `casado` enum('si','no') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `personas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

  