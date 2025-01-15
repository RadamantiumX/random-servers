# STREAMS

El consumo excesivo de datos en nuestra aplicación de NODE puede traernos como consecuencia, el alto consumo de la memoria. Como por ejemplo, un reproductor de video, que tiene que reproducir un archivo de video enorme, o las descargas de Google Drive. No queremos tomar ese archivo tan costoso y almacenarlo en la memoria.

Por debajo, los *console.log()* utilizan STREAM en NODE JS.

Si tenemos dos sistemas, uno con mas capacidad que el otro, el mas grande necesita enviarlo sus datos al otro, pero, no van a caber, ya que, el segundo cuenta con menos capacidad que el primero. Entonces, una posible solución, es poner esos datos en pequeños paquetes comprimidos, los cuales pueden ser enviados al segundo sistema sin sobrepasar su capacidad de almacenamiento. Antes de eso, los coloca en BUFFER (que es una especie de CACHE) que se encarga de la transferencia hacia el otro sistema.

