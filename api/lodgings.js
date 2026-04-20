import { Router } from 'express'

import prisma from '../lib/prisma.js'

const router = Router()

router.get('/', (req, res, next) => {
    res.status(200).send({})
})

router.post('/', async (req, res, next) => {
    const lodging = await prisma.lodging.create({ data: req.body })
    res.status(201).send({ id: lodging.id })
})

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    res.status(200).send({})
})

router.patch('/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    res.status(204).send({})
})

router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    res.status(204).send()
})

export default router
