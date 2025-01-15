import { Worker, isMainThread, workerData, threadId } from "node:worker_threads"

if(isMainThread){ // Verificamos si estamos en la THREAD principal
    const buffer = new SharedArrayBuffer(1) // Creamos el buffer
    // Lo pasamos a los WORKERS creados
    // Creamos los WORKERS en el mismo archivo
    // Lo ideal es separarlos
    new Worker(import.meta.filename, { workerData: buffer })
    new Worker(import.meta.filename, { workerData: buffer })
} else { // Si se crean los WORKERS pasamos aca
    const typedArray = new Int8Array(workerData) // Creamos un *Typed array* con workerData's (No es un ARRAY, no puede utilizar sus metodos)
    console.log("typedArray", typedArray)

    typedArray[0] = threadId
    // const value = Atomics.store(typedArray, 0, threadId)

    console.dir({ threadId, value: typedArray[0] })
}