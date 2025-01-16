# GRACEFULLY SHUTDOWN

Un servidor que se cierra, por alguna razón, puede traer problemas, sobre todo en las transacciones con las BD, que pueden realizarce o no. Es por eso que debemos cerrar todas las conexiones, antes de cerrar el servidor, es ahi donde entra el *GRACEFULLY SHUTDOWN*.
Esta acción realiza una limpieza antes de cerrar el servidor.