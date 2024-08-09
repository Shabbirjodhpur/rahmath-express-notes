import express from "express"
const router = express.Router()
import { authController } from "../controllers/index.js"

/*
    Method: POST
    Url: /api/v1/auth/signup
    Description: Use this route to signup
*/
router.post('/signup',
    authController.createUser
)

/*
    Method: POST
    Url: /api/v1/auth/login
    Description: Use this route to login
*/
router.post('/login',
    authController.login
)
export default router