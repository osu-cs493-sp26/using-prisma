import express from 'express'
import morgan from 'morgan'

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

app.use('*splat', (req, res, next) => {
    res.status(404).send({
        err: `This URL was not recognized: ${req.originalUrl}`
    })
})

app.listen(port, () => {
    console.log("== Server is listening on port:", port)
})
