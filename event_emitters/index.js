import { EventEmitter } from "events"

// const ticketManager = new EventEmitter()

/*
   Encapsulación Vs Simplicidad
   POO vs Functional Style
   Reusabilidad vs Generic Events

*/

export class TicketManager extends EventEmitter {
  constructor(supply){
    super() // Utilizamos las propiedades de la clase PADRE
    this.supply = supply
  }

  buy(email, price) {
    if(this.supply > 0){
        this.supply = this.supply - 1
        this.emit('buy', email, price, Date.now())
        return
    }

    this.emit('error', new Error('There are no more tickets left of purchase'))
  }
}