import { Router } from 'express'

import prisma from '../lib/prisma.js'
import { Lodging } from '../lib/zod.js'

const router = Router()

router.get('/', async (req, res, next) => {
    const lodgings = await prisma.lodging.findMany()
    res.status(200).send({ lodgings: lodgings })
})

router.post('/', async (req, res, next) => {
    console.log("== In POST /lodgings:")
    console.log(" -- req.body:", req.body)
    const data = Lodging.parse(req.body)
    console.log(" -- data:", data)
    const lodging = await prisma.lodging.create({ data: data })
    console.log(" -- lodging:", lodging)
    res.status(201).send({ id: lodging.id })
})

router.get('/:id', async (req, res, next) => {
    const id = parseInt(req.params.id)
    const lodging = await prisma.lodging.findUnique({
        where: { id: id }
    })
    if (lodging) {
        res.status(200).send(lodging)
    } else {
        next()
    }
})

router.patch('/:id', async (req, res, next) => {
    const id = parseInt(req.params.id)
    const data = Lodging.partial().parse(req.body)
    const lodging = await prisma.lodging.update({
        where: { id: id },
        data: data
    })
    res.status(204).send()
})

router.delete('/:id', async (req, res, next) => {
    const id = parseInt(req.params.id)
    const lodging = await prisma.lodging.delete({
        where: { id: id }
    })
    res.status(204).send()
})

export default router
