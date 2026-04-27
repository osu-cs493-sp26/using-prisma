import express from 'express'
import morgan from 'morgan'
import * as z from 'zod'
import {
    PrismaClientValidationError,
    PrismaClientKnownRequestError
} from "@prisma/client/runtime/client.js"

import api from './api/index.js'

const app = express()
const port = process.env.PORT || 8000

/*
 * Use the popular logger Morgan: https://github.com/expressjs/morgan.
 */
app.use(morgan('dev'))

app.use(express.json())

/*
 * API endpoints are factored into the api/ directory.
 */
app.use('/', api)

app.use((err, req, res, next) => {
    console.log("== in custom error handler")
    if (err instanceof z.ZodError) {
        res.status(400).send({
            err: z.prettifyError(err)
        })
    } else if (err instanceof PrismaClientValidationError) {
        res.status(400).send({
            err: err.message
        })
    } else if (err instanceof PrismaClientKnownRequestError) {
        next()
    } else {
        console.error(err)
        res.status(500).send(err)
    }

})

app.use('*splat', (req, res, next) => {
    res.status(404).send({
        err: `This URL was not recognized: ${req.originalUrl}`
    })
})

app.listen(port, () => {
    console.log("== Server is listening on port:", port)
})
