import { Router } from 'express'

const router = Router()

router.get('/', (req, res, next) => {
    res.status(200).send({})
})

router.post('/', (req, res, next) => {
    res.status(201).send({})
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
