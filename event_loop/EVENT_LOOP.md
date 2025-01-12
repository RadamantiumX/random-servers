# EVENT LOOP

Son muchos pasos que se realizan y que ocurren cada milisegundo cuando corremos una aplicación de NODE JS.
Siempre que la aplicación inicia, tambien lo hace el LOOP.


![alt text](image.png)

Las PROMISES toma la ejecución que contenga y la mueve afuera del EVENT LOOP, para que este pueda continuar.


## La mejor solución para el EVENT LOOP optimizado

Dentro de todas, la mejor opción sería el CLUSTER. Pero en este, debemos tener en cuenta evitar el FORK BOMB, donde el atacante usa la *DENEGACIÓN DEL SERVICIO*, para que nosotros tengamos que generar varios *FORKS*, por eso, es muy importante generar tantos como CPU's disponibles.
