import fs from "node:fs/promises"
import {generateRandomId} from '../utils/index.js'

async function getAllTodos(req, res){
    try {
        const data = JSON.parse(await fs.readFile('./db.json', 'utf-8'))

        res.json({ todos: data })
    } catch (e) {
        console.log(e)
        res.status(500).send({ error: "some error occured" })
    }
}
async function createTodo(req, res){
    try {
        const { name } = req.body

        const data = JSON.parse(await fs.readFile('./db.json', 'utf-8'))

        data.push({
            id: generateRandomId(),
            name,
            completed: false
        })

        await fs.writeFile('./db.json', JSON.stringify(data))

        res.send({ success: true, msg: "todo created successfully" })
    } catch (e) {
        res.status(500).send({ error: "some error occured" })
    }
}
async function deleteTodo(req, res){
    try {
        const { id } = req.params

        // READING DATA
        const data = JSON.parse(await fs.readFile('./db.json', 'utf-8'))

        // DELETING TODOS
        const index = data.findIndex(obj => obj.id == id)
        if (index != -1) {
            data.splice(index, 1)
        }

        // WRITING DATA
        await fs.writeFile('./db.json', JSON.stringify(data))
        res.send({ success: true, msg: `todo with ${id} deleted successfully` })
    } catch (e) {
        res.status(500).send({ error: "some error occured" })
    }
}
async function patchTodo(req, res){
    try {
        const { id } = req.params
        const { completed } = req.body

        const data = JSON.parse(await fs.readFile('./db.json', 'utf-8'))

        const index = data.findIndex(obj => obj.id == id)
        if (index != -1) {
            data[index].completed = completed
        }

        // WRITING DATA
        await fs.writeFile('./db.json', JSON.stringify(data))

        res.send({ success: true, msg: `todo with ${id} status changed successfully` })
    } catch (e) {
        res.status(500).send({ error: "some error occured" })
    }
}

export default {
    getAllTodos,
    createTodo,
    deleteTodo,
    patchTodo
}