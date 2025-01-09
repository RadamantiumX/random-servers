import express from 'express'

const app = express()
const port = 3000

app.get("/user", (req, res)=>{
    res.status(200).send("You are logging in")
})

app.get("/username/:name", (req, res)=>{
    const name = req.params.name
    res.status(200).send(`Your username is ${name}`)
})

app.listen(port, ()=>{
    console.log(`App ready & listening on http://localhost:${port}`)
})