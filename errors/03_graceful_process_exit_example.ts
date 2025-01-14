// Assuming developers mark known operational errors with error.isOperational=true

// Establece que sucede en el proceso de un ERROR
// Si esta Excepción no es detectada
// Entrará en este código
process.on('uncaughtException', (error: Error) => {
    errorManagement.handler.handleError(error); // Verificará el ERROR
    if(!errorManagement.handler.isTrustedError(error)) // Si no es un error predecible o ESPERABLE
      process.exit(1) // codigo de salida para RESETEAR ver: https://www.geeksforgeeks.org/node-js-exit-codes/
  });
    
  export class AppError extends Error {
    public readonly isOperational: boolean;
  
    constructor(description: string, isOperational: boolean) {
      super(description);
      Object.setPrototypeOf(this, new.target.prototype);
      this.isOperational = isOperational;
      Error.captureStackTrace(this);
    }
  }
    
  class ErrorHandler {
    public async handleError(err: Error): Promise<void> {
        // Si entra en este error, llamara a las funciones asyncs
      await logger.logError(err); // Log del ERROR en custion (facilita su resolución)
      // Funciones que se ejecutan al aparecer el ERROR
      await sendMailToAdminIfCritical();
      await saveInOpsQueueIfCritical();
      await determineIfOperationalError();
    };
  
    // Si es un ERROR ESPERADO
    public isTrustedError(error: Error) {
      if (error instanceof AppError) {
        return error.isOperational;
      }
      return false;
    }
  }
    
  export const handler = new ErrorHandler();