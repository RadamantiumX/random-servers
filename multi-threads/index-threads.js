import express from 'express'
import { Worker } from 'worker_threads'

const app = express()
const port = 3000

app.get("/non-blocking/", (req, res)=>{
    res.status(200).send("This page is non-blocking")
})

app.get("/blocking", async (req, res)=>{
    const worker = new Worker("./worker.js") // le pasamos el nombre del archivo que se encuentra en el mismo directorio

    // Primer evento
    worker.on("message", (data)=>{
        res.status(200).send(`results is ${data}`)
    })

    // Segundo evento --> Capturamos algún error
    worker.on("error", (error)=>{
        res.status(404).send(`An error occurred ${error}`)
    })

    
})

app.listen(port, ()=>{
    console.log(`App listening on http://localhost:${port}`)
})