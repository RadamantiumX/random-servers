export const errorController = (error, req, res, next)=>{
    error.statusCode = error.statusCode || 500 // Error interno
    error.status = error.status || 'error' // Error del servidor
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message,
    })
}