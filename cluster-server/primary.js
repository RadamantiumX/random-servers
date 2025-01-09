import cluster from 'cluster'
import os from 'os' // Para obtener información del OS del ordenador
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const cpuCount = os.cpus().length // verificamos las CPU's del usuario

console.log(`The total number of CPUs is ${cpuCount}`)
console.log(`Primery pid=${process.pid}`)
cluster.setupPrimary({
    exec: __dirname + "/index.js" // Hacemos referencia al *index.js* (que es donde esta el servidor)
})

// Recorremos las CPU's
for (let i = 0; i < cpuCount; i++){
    cluster.fork() // Inicializamos los CLUSTERS
}


// Si por algun error, se sale del CLUSTER, se iniciara otro
// Siempre nos aseguramos que haya las mismas instancias que CPU's disponibles en el ordenador
cluster.on("exit", (worker, code, signal)=>{
    console.log(`worker ${worker.process.pid} has been killed`)
    console.log("Starting another worker")
    cluster.fork()
})