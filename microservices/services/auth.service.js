import { ServiceBroker } from "moleculer";
// Simulamos la autenticación con el servicio auth

const broker = new ServiceBroker()


broker.createService({
    name: 'auth',
    actions: {
     async authUser(ctx){
         const { username, password } = ctx.params
         if(username === 'admin' && password === 'password'){
             return {
                success: true,
                message: 'User authenticated'
             }
         } else {
             return {
                success: false,
                message: 'User not authenticated'
             }
         }
     }
    }
})

export default broker