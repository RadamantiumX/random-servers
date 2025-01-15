import fs from 'fs'
import { pipeline, Transform } from 'stream'
import zlib from 'zlib' // Para comprimir un archivo sobre la marcha
import crypto from 'crypto' // Para encriptar sobre la marcha

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

// const writable = fs.createWriteStream("my-new-file.txt")
// writable.write("Hello, ")
// writable.end("world!")


/* Duplex Streams */

// Establecemos el nuevo archivo a crear
const writable = fs.createWriteStream("my-new-file.txt")

// Tenemos dos callbacks dentro de los metodos
// Transformamos los *chunks* en cadena de texto y despues a mayúscula
const uppercase = new Transform({
    transform(chunk, encoding, callback){
        callback(null, chunk.toString().toUpperCase())
    },
})

// readable.pipe(uppercase).pipe(writable)// Utilizamos el *pipe* para transferir la data de un archivo existente, a uno que va a crearse

// Por supuesto, los *pipe* pueden generar muchos problemas con MEMORY LEAK
// hay que manejar los prosibles errores que puedan aparecer.

// Esta seria una mejor forma de manejar la transferencia de STREAMS
pipeline(readable, uppercase, writable, (error)=>{
    if(error){
        console.error(error)
    }
})

// Tenemos mas clases que podemos utilizar de la libreria "stream", además de *Transform*, también esta: "Redeable", "Writable", "PassThrough"

/* More Streams */

app.get("/*", async(req, res)=>{
    const proxy = await fetch(`${origin}${req.path}`)
    res.writeHead(proxy.res.statusCode)
    proxy.res.pipe(res)
})