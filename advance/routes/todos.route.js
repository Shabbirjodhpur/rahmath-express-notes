import express from "express"
const router = express.Router()
import { todosController } from "../controllers/index.js"
import { first, second, example, errorMiddelware } from '../middelwares/index.js'
import { body } from "express-validator"

router.use(example)

/*
    Method: GET
    Url: /api/v1/todos/
    Description: Use this route to get all todos
*/
router.get('/',
    first,
    second,
    todosController.getAllTodos
)

/*
    Method: POST
    Url: /api/v1/todos/
    Description: Use this route to create a todo
*/
router.post('/',
    body('name').notEmpty(),
    errorMiddelware,
    todosController.createTodo
)

/*
    Method: Delete
    Url: /api/v1/todos/:id
    Description: Use this route to delete a todo
*/
router.delete('/:id',
    todosController.deleteTodo
)

/*
    Method: PATCH
    Url: /api/v1/todos/status/:id
    Description: Use this route to change completed status of todo
*/
router.patch('/status/:id',
    todosController.patchTodo
)

export default router