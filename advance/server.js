import express from "express"
const app = express()
import { todosRouter,authRouter } from './routes/index.js'

app.use(express.json())

app.use('/api/v1/todos',todosRouter)
app.use('/api/v1/auth',authRouter)

app.listen(5000, () => {
    console.log("server started successfully")
})






























// HTTP VERBS
// GET
// POST
// PATCH
// DELETE

// 172.253.63.100:443/signin
// https ----> 443
// http ------> 80