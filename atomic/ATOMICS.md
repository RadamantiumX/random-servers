# Atomics

Como se ha explicado antes, los MULTITHREADS se crean para quitar la carga de trabajo total a la THREAD principal.

Muchas veces, se pueden compartir diferentes tipos de datos entre los THREADS, pero si se trata de alguna otra tecnología mas robusta, como por ejemplo alguna de graficos, estas requieren algun acceso, de bajo nivel, a una memoria RAM, estas contienen largos ARRAYS.

## ARRAY BUFFER

Estos representan un *GENERIC RAW BINARY DATA BUFFER*, lo que significa, que admiten datos binarios largos (0,1), basicamente cosas de bajo nivel.

Cuando intentamos pasar estos ARRAY BUFFER de una THREAD a otra, este se separará de esa THREAD de origen, es decir, ya no tendrá acceso a el.
