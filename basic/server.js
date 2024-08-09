const express = require('express')
const axios = require('axios')
const app = express()
const PORT = 3000

// REST - Representative state Transfer

app.use(express.json())

// GET REQUEST
app.get('/', function (req, res) {
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    res.send('Shabbir')
})

app.get('/hi', function (req, res) {
    res.send('Hii Shabbir')
})

// POST REQUEST
app.post('/submit', (req, res) => {
    console.log(req.body)
    res.send("Okay")
})

// POST REQUEST with query
app.post('/comment', (req, res) => {
    console.log(req.query)
    res.send("Okay")
})

// POST REQUEST with params
app.post('/comment/:id', (req, res) => {
    console.log(req.params)
    res.send("Okay")
})

// CALCULATOR ADD METHOD
app.get('/calculator/add/:n1/:n2', (req, res) => {
    let {n1,n2} = req.params
    n1 = parseInt(n1)
    n2 = parseInt(n2)
    console.log(n1,n2)
    res.send(`answer is ${n1+n2}`)
})
// CALCULATOR SUBTRACT METHOD

// Users route for github
app.get('/users/search',async (req,res)=>{
    const {username} = req.query

    const response = await axios.get(`https://api.github.com/search/users?q=${username}`)

    res.json(response.data)
})


app.get('/users/:username',async (req,res)=>{
    const {username} = req.params

    const response = await axios.get(`https://api.github.com/users/${username}`)

    res.json(response.data)
})


app.listen(PORT, () => {
    console.log('Server started on port', PORT)
})