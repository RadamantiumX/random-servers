import express from 'express'
import { CustomError } from './utils/CustomError.js'
import { errorController } from './controllers/errorController.js'

const port = 3000
const app = express()

app.get('/', (req, res) => {
   res.status(200).send('Hello World!')
})

app.all('*', (req, res, next) => {
    // const err = new Error(`Can't find ${req.originalUrl} on this server`)
    // err.status = 'fail'
    // err.statusCode = 404
    const err = new CustomError(`Can't find ${req.originalUrl} on this server`, 404)
    next(err)// Llamamos al GLOBAL ERROR HANDLING MIDDLEWARE
})

// Basic handling middleware error for all errors
app.use(errorController)

app.listen(port, ()=>{
    console.log(`App listening on http://localhost:${port}`)
})