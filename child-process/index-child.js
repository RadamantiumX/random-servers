import {exec,execFile, spawn, fork} from 'child_process'
import path from 'path' // Devuelve un objeto del PATH con varios valores (directorio, archivo, etc...)
import { fileURLToPath } from 'url' // devuelve el PATH que le pasemos de forma efectiva y correcta
import { dirname } from 'path' // devuelve solo el directorio, no el archivo


// El import *import.meta.url* nos devuelve la URL completa del archivo donde se esta ejecutando
const __dirname = dirname(fileURLToPath(import.meta.url))

// EXEC
// Cone sto ejecutamos un comando, en este caso de WINDOWS
// Este metodo acepta un comando *ls -lh*
// Luego un CALLBACK
// El *ls* enumera todos los archivos de un directorio específico
// El *error* es por cualquier ERROR
// El *stdout* es cuando cerramos la sesión en la consola
// EL *stderr* es cuando nosotros mismo lanzamos un ERROR
// exec('dir', (error, stdout, stderr)=>{
//     if(error){
//         console.error(`error: ${error.message}`)
//         return
//     }

//     if(stderr){
//         console.error(`error: ${stderr}}`)
//         return
//     }

//     console.log(`stdout\n${stdout}`)
// })


// EXECFILE
// con *resolve()*, resolvemos el PATH absoluto que le pasamos
// const fileProcessorPath = path.resolve(__dirname, 'execFileProcessor.js')
// le pasamos *node*
// Con esto ejecutamos un archivo externo, usando NODE en este caso
// execFile('node', [fileProcessorPath], (error, stdout, stderr)=>{
//     if(error){
//                  console.error(`error: ${error.message}`)
//                  return
//              }
        
//              if(stderr){
//                  console.error(`error: ${stderr}}`)
//                  return
//              }
        
//              console.log(`stdout\n${stdout}`)
// })


// SPAWN
// Con esto mostramos todos los archivos en el directorio
// Usamos un comando *find*
// Puede ser similar a *exec()*, pero devuelve diferentes *EVENTOS*
// Es ASINCRONO, asi que devuelve los fragmentos, sin necesidad de ocupar todo el proceso principal
// Puede ser necesario para cuando manejamos grandes cantidades de datos
// const spawnedChild = spawn('find', ['.'])

// spawnedChild.stdout.on('data', (data)=>{
//     console.log(`stdout:\n${data}`)
// })

// spawnedChild.stderr.on('data', (data)=>{
//     console.error(`stderr: ${data}`)
// })

// spawnedChild.on('error', (error)=>{
//     console.error(`error: ${error.message}`)
// })

// spawnedChild.on('close', (code)=>{
//     console.log(`child process exited with code ${code}`)
// })

// FORK
// Va a estar a la escucha del *message*
// Esto nos permite comunicarnos con los otros procesos
const forkProcessorPath = path.resolve(__dirname, 'forkProcessor.js')
const forkedChild = fork(forkProcessorPath)
forkedChild.on('message', (msg)=>{ // Recimos el mensaje del HIJO
    console.log('Message from data processor exhange', msg) // Mostramos el mensaje del HIJO
})

forkedChild.send({ hello: 'world' }) // Enviamos este mensaje al HIJO