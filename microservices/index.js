import UserService from './services/user.service.js';
import EmailService from './services/email.service.js';
import AuthService from './services/auth.service.js';
// import { ServiceBroker } from "moleculer";
// const broker = new ServiceBroker()

// // Inicializamos el Servicio
// broker.createService({
//     name: 'greeter',
//     actions: {
//         sayHello(ctx){ // Recibe un contexto (ctx) de parametro
//          return `Hello ${ctx.params.name}` // Retorna un saludo con el nombre recibido
//         }
//     }
// })

// // Creamos una función asincrona para iniciar el broker y llamar al servicio greeter
// async function startApp(){
//     await broker.start()
//     const res = await broker.call('greeter.sayHello', {name: 'John'}) // Llama al servicio greeter y le pasa el nombre John
//     console.log(res) // Imprime el resultado
//     broker.stop() // Detiene el broker
// }

// startApp()

async function startApp() {
    // Inciando Servicios
    await UserService.start()
    await EmailService.start()
    await AuthService.start()

    try{
        // Simulate User creation
        // Llamamos al servicio
        // Creamos un Usuario
        const newUser = await UserService.call('users.createUser', 
            {
                username: 'John', 
                email: 'john@mail.com'

            })
            console.log('New user created:', newUser)

        // Obtenemos los Usuarios    
        const users = await UserService.call('users.getUsers')
        console.log('All Users:', users)

        // Simulando envio de EMAIL
        const emailResult = await EmailService.call('email.sendEmail', {
            recipient: newUser.email,
            subject: 'Welcome to our platform!',
            content: 'We are glad you joined us!'
        })
        console.log(emailResult)

        // Simulando la autenticación
        const authResult = await AuthService.call('auth.authUser', {
            username: 'admin',
            password: 'password'
        })
        console.log('Auth result:',authResult)
    }catch(err){
         console.error('Error:', err)
    } finally {
        // Detenemos los Servicios sin importar que suceda
        await UserService.stop()
        await EmailService.stop()
        await AuthService.stop()
    }
}

startApp()