# Atomics

Como se ha explicado antes, los MULTITHREADS se crean para quitar la carga de trabajo total a la THREAD principal.

Muchas veces, se pueden compartir diferentes tipos de datos entre los THREADS, pero si se trata de alguna otra tecnología mas robusta, como por ejemplo alguna de graficos, estas requieren algun acceso, de bajo nivel, a una memoria RAM, estas contienen largos ARRAYS.

## ARRAY BUFFER

Estos representan un *GENERIC RAW BINARY DATA BUFFER*, lo que significa, que admiten datos binarios largos (0,1), basicamente cosas de bajo nivel.

Cuando intentamos pasar estos ARRAY BUFFER de una THREAD a otra, este se separará de esa THREAD de origen, es decir, ya no tendrá acceso a el.
Hay mejor forma de trabajar con eso, y se llama *SharedArrayBuffer*. Lo que hace, es que se pueden compartir los BUFFER DE MEMORIA entre las THREADS.

## TYPED ARRAYS

Se utilizan en CANVAS, WEBGL. Podemos crearlos pero no modificarlos, en su lugar tiene un metodo, llamado *DataView()*, el cual puede ser obtenido, seteado y modificado.
Pero eso es un incoveniente, y es ahi donde entra ATOMIC, que nos permite modificar el valor del BUFFER