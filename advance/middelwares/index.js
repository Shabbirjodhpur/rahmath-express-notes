import { validationResult } from "express-validator"

function first(req, res, next) {
    console.log('inside first')
    next()
}
function second(req, res, next) {
    console.log('inside second')
    next()
}

function example(req, res, next) {
    console.log('inside example')
    next()
}
function errorMiddelware(req, res, next) {
    const result = validationResult(req);
    if (result.isEmpty()) {
        return next()
    }

    return res.status(401).send({ errors: result.array() });
}

export {
    first,
    second,
    example,
    errorMiddelware
}