# NGINX Tutorial

Sirve como un *servidor*, que actuará en el servidor de nuestro navegador.

![alt text](image-1.png)

En vez de hacer una petición directamente al SERVIDOR, originario del sitio, esta petición se hace a *NGINX* y luego al SERVIDOR. A *NGINX* se lo conoce como PROXY INVERSO.
Ahora, si tenemos mucho trafico en nuestro servidor (porque nuestro sitio web es muy popular), entonces deberíamos tener varios servidores trabajando paralelamente, *NGINX* se encargara de recibir esa petición y enviarla a algun SERVIDOR disponible, eso se lo conoce como *BALANCEADOR DE CARGA*, todo esto beneficia a nuestra aplicación porque la hace mas escalable.
Otros de los aspectos en los cuales *NGINX* es muy beneficioso, es en la *ENCRIPTACIÓN* (HTTP --> HTTPS), pero esto lo tiene que llevar al nivel de varios servidores, en este caso, *NGINX* es quien lleva esa *ENCRIPTACIÓN*, y recibe esa información de los servidores para decifrarla y enviarla al CLIENTE y hacer el camino **INVERSO**.

*Proxy: Es algo es representación de otro.*

Otras de las ventajas, es el CACHING de la información, este PROXY puede guardar la información proveniente del SERVIDOR y enviarla a todas las peticiones, todo esto sin tener que pedirla (tanto al servidor como a la DB) en cada solicitud.
Además, solo tenemos que asegurar el servidor PROXY de los atancantes, en lugar de todos los servidores que tengamos vinculados a el, todo esto lo logramos con la encriptación que ya mencionamos.
La compresión de los archivos es tambien indispensable cuando utilizamos NGINX, todo esto con el fin de economizar los recursos del ANCHO DE BANDA, esto lo hace con CHUNKS.


## APACHE v NGINX

La diferencia entre ambos no es mucha. APACHE, al principio, solo era un simple SERVIDOR WEB pero después se le asigno la propiedad de PROXY.

![alt text](image-2.png)


## Instalación de NGINX

Al hacerlo por UBUNTU utilizamos el siguiente comando:

```bash
$ sudo apt update
$ sudo apt install nginx
```

Primero, actualizamos las dependencias de UBUNTU, y luego instalamos NGINX. El mismo estará ubicado en **~/etc/nginx/**.
Entrando en ese directorio, vamos a encontrarnos con el archivo *nginx.conf*, es allí donde encontraremos la configuración de *NGINX* en SERVIDOR particular y luego entregarnos nuestro contenido web.


## Iniciando NGINX

Simplemente usamos este comando para iniciar (recordando que estamos utilizando UBUNTU):

```bash
$ sudo systemctl start nginx
```

Podemos verlo en funcionamiento en la URL: http://localhost:80 -> (puerto predeterminado para NGINX).

En los archivos de configuración podemos ver lo siguiente:

```conf
worker_connections 768
```

Es un contenido con *clave y valor*, en este caso, *woker_connections* es la clave, y el *768* es el valor, que son directivas. Y lo que esta dentro de las llaves *{}* es un *CONTEXTO*.

```conf
events {
	worker_connections 768;
	# multi_accept on;
  }
```

Estos contienen DIRECTIVAS de un contexto en específico.


## Inicio Proyecto de práctica NGINX

Creamos un proyecto sencillo, utilizando *Node Js* el cual se va a DOCKERIZAR donde tendremos 3 instancias de esta misma app como CONTENEDORES.
Setemos el archivo DOCKER de esta manera:

```yml
FROM node:14

WORKDIR /app

COPY server.js
COPY index.html
COPY package.json

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
```

En el nuevo directorio */app* es donde se van a copiar los archivos, lo definimos como el directorio de trabajo. En el *CMD* es como iniciamos la aplicación de forma local.
Para poder ver las imagenes disponibles utilizamos el siguiente comando:

```bash
dcoker images | grep <<Nombre_de_la_App>>
```

Para correr el contenedor:

```bash
docker run -p 3000:3000 <<Nombre_de_la_App:version>>
```
Lo detenemos con:

```bash
docker stop <<id_contenedor>>
```

Pero, en este caso, vamos a correr 3 instancias de la aplicación en vez de solo una. Y para necesitamos de DOCKER COMPOSE, con el archivo *docker-compose.yml*.

*docker-compose.yaml*

```yaml
version: '3'
services:
  app1:
    build: .
    environment:
      - APP_NAME=App1
    ports:
      - "3001:3000"

  app2:
    build: .
    environment:
      - APP_NAME=App2
    ports:
      - "3002:3000"  

  app3:
    build: .
    environment:
      - APP_NAME=App3
    ports:
      - "3003:3000"         
```

Tenemos 3 servicios definidos utilizando el mismo archivo *Docker*. Podemos utilzar la variable de entorno *APP_NAME*, de este archivo, dentro de la aplicación. Los puertos tienen que ser diferentes entre las aplicaciones que creamos, no pueden ser el mismo, pero dentro del contenedor siempre va a utilizar el puerto 3000.
Ya teniendo toda la configuración completa, podemos iniciar *DOCKER COMPOSE*:

```bash
docker-compose up --build -d
```

Así se iniciaran los 3 contenedores corriendo, podemos verificarlo con el comando *docker ps*. Hasta aquí, podemos acceder a cada una de los *réplicas* por separado, o sea, *localhost:3001, localhost:3002 y localhost:3003*, pero lo que queremos es un *punto de entrada*, y es ahí donde entre *NGINX*, además podemos añadir una conexión mas segura para nuestra aplicación.

Modificamos el archivo *nginx.conf*, pero antes, ingremos los permisos necesarios para poder hacerlo, lo hacemos con el siguiente comando:

```bash
$ sudo chmod a+rwx <<Filename>>
```

De esta manera, ya estamos autorizados a modificar el archivo en cuestión. La configuración a realizar, se va a tratar de que NGINX sea el PROXY de los 3 contenedores (en este ejemplo), se ejecutará localmente y dará equilibrio a la carga de solicitudes hacia ellas.

**NGINX es una especie de escudo que da acceso parcial al servidor, por medio del PROXY. Solo se podrá ver lo que se solicite en el CLIENTE. La IP expuesta es la de NGINX, y no la del SERVER original.**


## Iniciar NGINX

Una vez finalizada la configuración, podemos dar inicio a NGINX, utilizando el comando *nginx*. Luego, verificamos en la URL *http://localhost:8080*.


## Seguridad con NGINX

Para poder encriptar los datos con NGINX, debemos utilzar una conexión segura a traves del *https*, y para eso primero necesitamos un certificado del mismo. Se puede generar uno de forma local, es un *certificado autofirmado*. 
En producción, los certificados son generado por autoridades oficiales, que validan la legitimidad de nuestro certificado.

### Generando el certificado local SSL

Primero, tenemos que crear el directorio donde pondremos esos certificados. Y luego, utilizamos el siguiente comando:

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt
```

*Nos hará algunas preguntas para la configuración.*

La directiva *openssl*, es una herramienta para generar *keys*, certificados y conexiones seguras.
El certificado SSL esta conformado por dos partes, la LLAVE PRIVADA (*private key*) y la LLAVE PUBLICA (*public key*). Esos archivos van a ser generados automáticamente.

***Es muy importante resetear NGINX cuando hayamos modificado alguna configuración y se pueda sobrescribir la antigua.***

```bash
nginx -s reload
```

*Reseteamos NGINX ⬆️ (ver comandos con: nginx -h). O también utilizar sudo systemctl reload nginx, para el reset.*

*Detenemos y limpiamos NGINX.*

```bash
nginx -s stop
```

*Verificamos procesos NGINX.*

```bash
ps aux | grep nginx
```