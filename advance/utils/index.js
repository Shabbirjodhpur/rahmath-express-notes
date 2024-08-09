import jwt from "jsonwebtoken"
import config from "config"

function generateRandomId() {
    return Math.floor(Math.random() * 9999);
}

function generateToken(payload){
    const JWT_KEY = config.get("JWT_KEY")
    const token = jwt.sign(JSON.stringify(payload),JWT_KEY)

    return token
}

export {
    generateRandomId,
    generateToken
}