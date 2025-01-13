# Mejores Prácticas con la SEGURIDAD EN NODE JS

## Rate Limiting

Aca especificaremos cuantas solicitudes aceptará un servidor NODEJS en un momento dado (*todo esto para evitar un ataque DOS, por ejemplo*), una de las mejores formas es utilizando una libreria de NODE, llamada **express-rate-limit**.

```bash
npm i express-rate-limit
```

No es muy recomandada utilizarla en aplicaciones escalables, o sea, aplicaciones demasiado grandes, la razón es porque esta libreria no debería estar en la aplicación desde un comienzo, esta última solo se reserva para el negocio por la que fue creada. Lo mejor sería utilizarla en NGINX.

Es un práctica muy común tener un servidor NGINX corriendo frente a nuestro proyecto NODEJS.

*Esta es una muy buena práctica de seguridad, aunque, algunos proveedores como AWS, MICROSOFT AZURE o GOOGLE CLUD, por ejemplo, tienen es opción incorporada. Lo que significa que no tendremos que utilizar NOGINX.*


## Password Encryption

Al almacenar una contraseña ingresada por el usuario, no es colocada con el mismo formato el cual proviene, esto evita que cualquier atacante pueda obtener la contraseña real, en su lugar, guardaremos la contraseña con una *Hash* aleatorio. Para lograrlo utilizaremos la libreria **bcrypt**.

```bash
npm i bcrypt
```

## JWT Blacklisting

Es para administrar sesiones, es una buena practica de seguridad incluir ***Blacklisting*** en los JWT TOKENS. Los JWT viven en el CLIENTE, pero son emitidos por el SERVIDOR, pero no hay forma que este último revoque los JWT, supongamos que se vea comprometido, y ahora queremos que el CLIENTE ya no tenga este JWT, ahi es donde entra el ***Blacklisting***. Lo primero que debemos hacer es guardar la sesion de JWT en la BASE DE DATOS. 
Las JWT ya tienen fecha de vencimiento, y si las guardamos en la BD, podemos ver con claridad cuales fueron comprometidas.
Una solución mas efectiva sería guardar dos TOKENS en la BD, el TOKEN que va expirar, y el TOKEN de actualización, que es uno diferente.


## JSON Schema Validation

Todo lo que llega al servidor es vulnerable, USER INPUT, REQUEST de data, etc. En estas situaciones, podemos tener un SCHEMA REQUEST, para el BODY que vienen del CLIENTE.
Esto quiere decir, todo lo que se espera por parte del CLIENTE.

```bash
npm i jsonschema
```

