const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

function middelware1(req, res, next) {
    console.log('inside middelware 1')
    next()
}

function middelware2(req, res, next) {
    console.log('inside middelware 2')
    next()
}

app.get('/hi', middelware1, middelware2, (req, res,next) => {
    res.send('Hii Shabbir')
})

function checkPassword(req,res,next){
    if(req.body.password!='Shabbir') return res.send('Error')
        next()
}

app.post('/submit',checkPassword,(req,res)=>{
    return res.send('Success')
})


app.listen(PORT, () => {
    console.log('Server started on port', PORT)
})