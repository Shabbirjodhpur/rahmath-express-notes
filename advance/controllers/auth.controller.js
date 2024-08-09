import fs from "node:fs/promises"
import { generateToken } from "../utils/index.js"


async function createUser(req, res) {
    try {
        const { username, password } = req.body

        if (username == undefined || password == undefined) return res.status(400).json({ msg: "Username or password was empty" })

        const data = JSON.parse(await fs.readFile('./database/users.json', 'utf-8'))

        const alreadyExist = data.findIndex(obj => obj.username == username);

        if (alreadyExist != -1) return res.status(400).json({ msg: "Username already exists" })

        data.push({
            username,
            password
        })

        await fs.writeFile('./database/users.json', JSON.stringify(data))

        return res.send({ success: true, msg: "Signed up successfully" })
    } catch (e) {
        console.log(e)
        res.status(500).send({ error: "some error occured" })
    }
}

async function login(req,res) {
    try {
        const { username, password } = req.body

        if (username == undefined || password == undefined) return res.status(400).json({ msg: "Username or password was empty" })

        const data = JSON.parse(await fs.readFile('./database/users.json', 'utf-8'))

        const alreadyExist = data.findIndex(obj => obj.username == username);

        if (alreadyExist == -1) return res.status(400).json({ msg: "Username does not exists" })

        if (data[alreadyExist].password != password) return res.status(400).json({ msg: "Invalid credentials" })

        const token = generateToken({ username })

        return res.send({ success: true, msg: "Login successfully", token })
    } catch (e) {
        res.status(500).send({ error: "some error occured" })

    }
}

export default {
    createUser,
    login
}