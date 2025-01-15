# La necesidad e utilizar NGINX con los servidores NODE JS

Como bien se sabe, *NGINX* es un *proxy inverso*, que esta alojado dentro de nuestro SERVIDOR PRIVADO EN LA NUBE. Puede aceptar las peticiones vinientes del CLIENTE y luega las modifica sobre la marcha, modifica las HEADERS o el BODY de la petición, en algunos casos. Después, redirige la peticiones a algunos de nuestros servidores.
Pero, también puede funcionar a la inversa utilizando NGINX, es decir, que puede modificar los HEADERS y enviarselos al CLIENT.

![alt text](image.png)


## Beneficios

1- Encriptación SSL: Https security encryptation.
2- Buffering: Envia paquetes de forma mas segura.
3- Recovery : En caso de ERRORES.
4- Load Balancing
5- Enterprise Routing
6- Gzip Compression
7- Caching Static Content

*Lo importante es que el servidor Node Js, solo se ecnargue de la logica del negocio, cualquier otra configuración (de las arriba mencionadas) tienen que manejarse en un PROXY, en este caso uno inverso como lo es NGINX.*