import { ServiceBroker } from "moleculer";


const broker = new ServiceBroker()

// Inicializamos el Servicio
broker.createService({
    name: 'greeter',
    actions: {
        sayHello(ctx){ // Recibe un contexto (ctx) de parametro
         return `Hello ${ctx.params.name}` // Retorna un saludo con el nombre recibido
        }
    }
})

// Creamos una función asincrona para iniciar el broker y llamar al servicio greeter
async function startApp(){
    await broker.start()
    const res = await broker.call('greeter.sayHello', {name: 'John'}) // Llama al servicio greeter y le pasa el nombre John
    console.log(res) // Imprime el resultado
    broker.stop() // Detiene el broker
}

startApp()