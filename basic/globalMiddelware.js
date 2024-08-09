const express = require("express")
const app = express()
const PORT = 5000

function globalM1(req,res,next){
    console.log('inside global middelware 1')
    next()
}
function globalM2(req,res,next){
    console.log('inside global middelware 2')
    next()
}

app.use(globalM1)

app.get('/hi',(req,res)=>{
    res.send("Inside hi")
})

app.use(globalM2)

app.get('/hello',(req,res)=>{
    res.send("Inside hello")
})

app.get("*",(req,res)=>{
    res.status(404).send("No such route exist")
})


app.listen(5000,()=>{
    console.log('Server started on port', PORT)
})