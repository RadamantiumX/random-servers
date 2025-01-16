// SIGINT => Signal Interruption -> Aparece si detenemos el servidor manualmente
// SIGTERM => Signal Termination -> Viene del servicio que se este ejecutando (por ejemplo DOCKER)
// SIGKILL => Signal Killed -> Cuando ya no haya período de gracia, se mata (KILL) el servicio, o sea, es forzado

import express from 'express'
import mysql from 'mysql2'
import WebSocket from 'ws'
import { fork } from 'child_process'

const app = express()
const server = app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})


process.on("SIGTERM", () => {
    console.log("SIGTERM signal received.")
    server.close(()=>{
       console.log("Closed out remaining connections")
       // closeDBConnection()
       // closeWSConnection()
       // child.kill('SIGINT')

       // Additional cleanup tasks go here

       process.exit(0)
    })
})

process.on("SIGINT", () => {
  console.log("SIGINT signal received")
  server.close(()=>{
    console.log("Closed out remaining connections")
       // closeDBConnection()
       // closeWSConnection()
       // child.kill('SIGINT')

       // Additional cleanup tasks go here
       process.exit(0)
  })
})
