import { TicketManager } from "./ticketManager.js";
import { EmailService } from "./emailService.js";
import { DatabaseService } from "./databaseService.js";

const ticketManager = new TicketManager(3) // Le pasamos el valor de "supply" que es de 3
const emailService = new EmailService()
const databaseService = new DatabaseService()

// Al ejecutarse el evento "buy"
ticketManager.on('buy', (email, price, timestamp)=> {
    emailService.send(email)
    databaseService.save(email, price, timestamp)
})

// Al aparecer el evento "error"
ticketManager.on('error', (email, price, timestamp)=> {
    console.error('Some Error on Ticket buying...')
})

ticketManager.buy('test1@email.com', 10)

// Este evento se activa si intentamos llamar al evento "buy" nuevamente
ticketManager.once("buy", () => {
    console.log("This is only called once");
});