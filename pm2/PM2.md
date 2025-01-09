# PM2

Es una administrador de *PROCESOS*, facilita el escalado de las aplicaciones, como puede ser una de **NODE JS**. También, podemos reiniciarlas atomáticamente, en el caso que se caigan por alguna error.

Al momento de cerrar la ejecución en la terminal (en el entorno de desarrollo), la aplicación se detendrá en el puerto que este corriendo. Otro inconveniente con el que nos podemos encontrar, es cuando ejecutamos la aplicación (sobre todo en UBUNTU), ya no tendremos la línea de comandos disponible para seguir trabajando con ella, en todo caso, primero debemos detener la ejecución.


## Modo ejecución con PM2

Con PM2 solo tenemos que utilizar el siguiente comando:

```bash
pm2 start <app_name>
```

En donde tenemos la "app_name" debemos poner el nombre del archivo donde se esta ejecutando la aplicación, en este caso de NODE JS.

Lo que ocurrirá después, es que PM2 se va a estae ejecutando en segundo plano de nuestr aplicación, incluso si cerramos la ventana de la terminal que estemos utilizando.

Con el comando:

```bash
pm2 ls
```

Podemos seguir monitoreando nuestra aplicación. También, podemos hacer un reset a la aplicación.

```bash
pm2 restart *id_process*
```

Detener:

```bash
pm2 stop *id_process*
```

Monitoreo en tiempo real:

```bash
pm2 monit
```

Se pueden administrar múltiples aplicaciones, incluso podemos utilizar un *Flag*, lo que hará que PM2 este atento a los cambios que se produzcan durante el desarrollo de esas aplicaciones.

**Hay muchos otros comando que se pueden ver en la documentacion oficial.**