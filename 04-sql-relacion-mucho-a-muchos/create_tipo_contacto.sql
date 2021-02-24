
CREATE TABLE `tipo_contacto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `tipo_contacto`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tipo_contacto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;