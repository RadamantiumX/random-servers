export class CustomError extends Error{
    constructor(message, statusCode){
       super(message) // Llamamos al constructor de la clase padre y le pasamos el mensaje
       this.statusCode = statusCode // El código de estado
       this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error' // Si el código de estado es mayor o igual a 400 y menor que 500, entonces es un error de fail, de lo contrario es un error de servidor
       this.isOperational = true // Si el error es operacional
       Error.captureStackTrace(this, this.constructor) // Capturamos la pila de llamadas
    }
}