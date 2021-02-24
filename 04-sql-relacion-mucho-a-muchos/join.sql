--Hacemos el join para relacionar la tabla punto_contacto con la de personas y visualizar por pantalla 
--las forma de contactarlo.

SELECT personas.*,
tipo_contacto.nombre as tipo_contacto ,
punto_contacto.valor as contacto 
FROM `punto_contacto`
INNER JOIN personas 
ON personas.id = punto_contacto.persona_id
INNER JOIN tipo_contacto 
ON tipo_contacto.id = punto_contacto.tipo_de_contacto_id
limit 20