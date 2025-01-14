import express from 'express'
import EventEmitter from 'events'

const app = express()
const port = 3000
const eventEmitters = new EventEmitter()

// Variable global
// Hay que evitarlas, pueden causar MEMORY LEAKS
// Estan ATADAS al NODO RAIZ
// Si fuera en el cliente sería *window*, en el caso de NODE JS, *global*
let tasks = [] // primera causa de MEMORY LEAK

app.get('/', (req, res) => {

    // Innecesario uso de un CALLBACK
    // El recolector de basura no sabrá si terminó, o no, el CALLBACK
    // Por lo tanto, se quedará atascado en la memoria.
    tasks.push(function() { // Utiliza una variable externa para el CLOSURE
        return req.headers
    })

    // Mucha data
    // Del lado del cliente (en proyectos web, por ejemplo), tenemos el localStorage, cache, etc.
    const hugeArray = new Array(100000000).fill(req) // fill --> reemplaza todos los elementos por un valor
    // Utilizar *memcached* --> npm i memcached
    


   req.user = {
    id: 1,
    username: 'Inefficient User',
    badObject: req, // Referencia *ciclica* --> son malas prácticas, apunta al objeto de la REQ orginal
    hugeArray 
   }
   
   // No hay nada que remueva a este EVENTO
   eventEmitters.on('start', ()=>{
    console.log('Useless event emitted')
   })

   // Tienen que haber un *removeListener*, de otra forma, quedan atorados en la memoria
   // eventEmitters.rawListeners('start')

  const resWithTimeout = setTimeout(()=>{ // Hay que asignar el TIMER a una variable para que no se quede atascado en la memoria
    res.send('Hello world')
   })

   // Hay que limpiar el TIMER, para que no se quede atascado en la memoria
   clearTimeout(resWithTimeout)
})

app.listen(port, ()=>{
    console.log(`App is listen on port: ${port}`)
})
