const producToAdd = undefined

// Mala práctica
/*if(!producToAdd){
    throw('How can i add new product when no value provided?') // Pasar una cadena de texto, es tener baja calidad en el codigo
}*/


// OKAY
// Puede estar bien, aunque no da una buena información acerca del error en cuestión
// if(!producToAdd){
//     throw new Error('How can i add new product when no value provided?')
// }



type HttpCode = 200 | 300 | 404 | 500

// Objeto con valores de mensajes y codigo HTTP
const commonErrorsDict: {resourceNotFound: string, notFound: HttpCode} = {
    resourceNotFound: 'Resource not found',
    notFound: 404
}


// Clase que hereda de la clase *Error*
export class AppError extends Error {
    // Contiene 3 atributos de solo lectura, pero son publicos
    // De esta manera se pueden acceder a ellos desde afuera
    public readonly name: string; 
    public readonly httpCode: HttpCode;
    public readonly isOperational: boolean;
   
    // Seteamos el constructor y añadimos un atributo mas heredado de la clase ERROR
    constructor(name: string, httpCode: HttpCode, description: string, isOperational: boolean){
        super(description) // Atributo heredado
        
        // Añadimos un nuevo prototype a este clase
        Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain

        this.name = name;
        this.httpCode = httpCode;
        this.isOperational = isOperational; // Hacemos que el ERROR sea predecible, o algo relacionado a la tarea asignada, con esto, facilita la solución de este error
        
        // No es standar en V8
        // Crea una nueva propiedad en instancia del Error class
        Error.captureStackTrace(this)
    }
}

// Best
// Con el nombre del ERROR, y el codigo HTTP, nos permiten debuguear mejor.
if(!producToAdd){
    // Utilizamos una instancia de AppError, que hereda de la clase Error
    throw new AppError(commonErrorsDict.resourceNotFound, commonErrorsDict.notFound, 'Due to the mismatch between the client defnied user and existing users in the database...', true)
}
