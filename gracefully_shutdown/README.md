# GRACEFULLY SHUTDOWN

Un servidor que se cierra, por alguna razón, puede traer problemas, sobre todo en las transacciones con las BD, que pueden realizarce o no. Es por eso que debemos cerrar todas las conexiones, antes de cerrar el servidor, es ahi donde entra el *GRACEFULLY SHUTDOWN*.
Esta acción realiza una limpieza antes de cerrar el servidor.

*Los CHILD PROCESS tambien pueden detenerse de esta forma.*


## Apagado con elegancia CONTENEDOR DOCKER

El contenedor DOCKER enviará el SIGTERM antes que lo detengamos, para detener los servicios. Si no lo logramos detener, de esta forma elegante, despues de 10 segundos lo hará de forma forzada (localmente podemos aumentar ese tiempo).

