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
       closeDBConnection()
       closeWSConnection()
       child.kill('SIGINT') // Detenemos los CHILD PROCESS

       // Additional cleanup tasks go here

       process.exit(0)
    })
})

process.on("SIGINT", () => {
  console.log("SIGINT signal received")
  server.close(()=>{
    console.log("Closed out remaining connections")
       closeDBConnection()
       closeWSConnection()
       child.kill('SIGINT') // Detenemos los CHILD PROCESS

       // Additional cleanup tasks go here
       process.exit(0)
  })
})

// Cerramos MySQL
function closeDBConnection(){
    connection.end((err)=>{
        if(err) {
            console.error("Error closing MySQL connection", err)
            process.exit(1)
        } else {
            console.log("MySQL connection closed.")
            process.exit(0)
        }
    })
}

// Cerramos los WEBSOCKETS
function closeWSConnection(){
    ws.close(1000, "Process terminated") // 100 is the normal closure code
}

// Si tuvieramos una conexion al servicio de RabbitMQ, tambien lo podemos cerrar 
// RabbitMQ es un servicio de mensajeria en tiempo real, para chats