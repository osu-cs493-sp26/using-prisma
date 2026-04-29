import { Router } from 'express'

import prisma from '../lib/prisma.js'
import { Reservation } from '../lib/zod.js'

const router = Router()

router.post('/', async (req, res, next) => {
    const data = Reservation.parse(req.body)
    const reservation = await prisma.reservation.create({ data: data })
    res.status(201).send({ id: reservation.id })
})

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    res.status(200).send({})
})

export default router
