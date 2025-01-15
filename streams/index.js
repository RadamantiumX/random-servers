import fs from 'fs'

/* Readable Streams */

const readable = fs.createReadStream("./my-file.tsxt", { highWaterMark: 20 })

// Va a escuchar el evento "data", va a recibir un "chunk"
readable.on("data", (chunk) => { // El "chunk" es un representacion BINARIA
    console.log("New chunk:", chunk.toString()) // Se mostrará por consola un nuevo fragmento convertido de nuevo a cadena.
})