import { ServiceBroker } from "moleculer";
// Simulamos el envio de email con el servicio email

const broker = new ServiceBroker()


broker.createService({
    name: 'email',
    actions: {
       async sendEmail(ctx){
           const { recipient, subject, content } = ctx.params // Recibimos los parametros
          // MOCKING envio de email
          console.log(`Sending eamil to ${recipient} with subject ${subject}`)
          console.log(`Content: ${content}`)
          return `Email sent to ${recipient}`
       }    
    }
})

export default broker