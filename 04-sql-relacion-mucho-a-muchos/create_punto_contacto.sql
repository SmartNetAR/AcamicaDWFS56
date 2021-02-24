--Creo el modelo punto de contacto con la relacion persona_id 

CREATE TABLE `puntos_contacto` (
  `id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `tipo_de_contacto_id` int(11) NOT NULL,
  `valor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `puntos_contacto`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `puntos_contacto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

  
ALTER TABLE agenda.puntos_contacto
  ADD CONSTRAINT puntos_contacto_FK FOREIGN KEY (persona_id) REFERENCES agenda.personas(id) ON DELETE CASCADE;

ALTER TABLE agenda.puntos_contacto
  ADD CONSTRAINT puntos_contacto_FK_1 FOREIGN KEY (tipo_de_contacto_id) REFERENCES agenda.tipo_contacto(id) ON DELETE CASCADE;
