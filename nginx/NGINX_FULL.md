# NGINX Tutorial

Sirve como un *servidor*, que actuará en el servidor de nuestro navegador.

![alt text](image-1.png)

En vez de hacer una petición directamente al SERVIDOR, originario del sitio, esta petición se hace a *NGINX* y luego al SERVIDOR. A *NGINX* se lo conoce como PROXY INVERSO.
Ahora, si tenemos mucho trafico en nuestro servidor (porque nuestro sitio web es muy popular), entonces deberíamos tener varios servidores trabajando paralelamente, *NGINX* se encargara de recibir esa petición y enviarla a algun SERVIDOR disponible, eso se lo conoce como *BALANCEADOR DE CARGA*, todo esto beneficia a nuestra aplicación porque la hace mas escalable.
Otros de los aspectos en los cuales *NGINX* es muy beneficioso, es en la *ENCRIPTACIÓN* (HTTP --> HTTPS), pero esto lo tiene que llevar al nivel de varios servidores, en este caso, *NGINX* es quien lleva esa *ENCRIPTACIÓN*, y recibe esa información de los servidores para decifrarla y enviarla al CLIENTE y hacer el camino **INVERSO**.


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
