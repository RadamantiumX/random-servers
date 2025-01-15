import fs from 'fs'

/* Readable Streams */
// Archivo de texto = 1000 Bytes --> Chunk = 20 Byte en cada parte
const readable = fs.createReadStream("./my-file.txt", { highWaterMark: 20 }) // El "highWaterMark" es un limite para el BUFFER

// Va a escuchar el evento "data", va a recibir un "chunk"
/*readable.on("data", (chunk) => { // El "chunk" es un representacion BINARIA
    console.log("New chunk:", chunk.toString()) // Se mostrará por consola un nuevo fragmento convertido de nuevo a cadena.
})*/

/*(async ()=> {
    for await (const chunk of readable){
        console.log("New chunk:", chunk.toString())
    }
})()*/


/* Writable Streams */

const writable = fs.createWriteStream("my-new-file.txt")
writable.write("Hello, ")
writable.end("world!")