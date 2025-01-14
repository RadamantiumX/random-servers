import { AppError } from "./01_extended_error_object_example";
// Route controller
// Funciona como el fragamento de un codigo principal
// Se trata de añadir un nuevo registro, mediante un metodo "addNew",
// el cual puede apuntar a una DB
try {
    customerService.addNew(req.body).then((result: Result) => {
        res.status(200).json(result);
    }).catch((error: Error) => {
        // Aca utilizamos el ERROR en el primer archivo
        next(throw new AppError(403, 'Forbidden', 'Customer cannot add an item at this point', true, true));
    });
}
catch (error) {
    // Aca utilizamos el ERROR en el primer archivo
    next(throw new AppError(403, 'Forbidden', 'Customer cannot add an item at this point', true, true));
}

// Error handling middleware
app.use(async (err: Error, req: Request, res: Response, next: NextFunction) => {
    handler.handleError(err, req) // Manejamos la situación si aparece algun Error
});








// Separamos la logica del error en una clase
class ErrorHandler {
    public async handleError(error: Error, responseStream: Response): Promise<void> {
        await logger.logError(error);
        await fireMonitoringMetric(error);
        await crashIfUntrustedErrorOrSendResponse(error, responseStream);
    };
}
// Instanciamos la clase del ERROR
export const handler = new ErrorHandler();