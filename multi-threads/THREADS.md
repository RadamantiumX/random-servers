# THREADS

Como ya sabemos, NODE JS corre con el motor V8, que a su vez, este mismo implementa una biblioteca llama **LIBUV**. Esta biblioteca, permite que NODE implemente algunos subprocesos ocultos, o **THREADS** (hilos).
En total, hay como siete SUBPROCESOS ocultos, como por ejemplo, la recolección de residuos, y los demás que responden cuando es necesario.
Las tareas, resueltas a través de un *MULTITHREADING*, se completar mucho mas rápido que si las hicieramos sin ellas.

## CORES DISPONIBLES

Podemos obtener los CORES con los cuales se maneja el ordenador donde corremos nuestra aplicación.

```bash
sysctl -n hw.ncpu
```

**(Only in LINUX OS)**

