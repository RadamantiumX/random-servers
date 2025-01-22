import express from 'express'

const port = 3000
const app = express()

app.get('/', (req, res) => {
   res.status(200).send('Hello World!')
})

app.all('*', (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server`)
    err.status = 'fail'
    err.statusCode = 404

    next(err)// Llamamos al GLOBAL ERROR HANDLING MIDDLEWARE
})

// Basic handling middleware error
app.use((error, req, res, next)=>{
    error.statusCode = error.statusCode || 500 // Error interno
    error.status = error.status || 'error' // Error del servidor
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message,
    })
})

app.listen(port, ()=>{
    console.log(`App listening on http://localhost:${port}`)
})