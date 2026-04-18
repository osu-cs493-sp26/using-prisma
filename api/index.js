import { Router } from 'express'

import lodgingsRouter from './lodgings.js'
import reservationsRouter from './reservations.js'

const apiRouter = Router()

apiRouter.use('/lodgings', lodgingsRouter)
apiRouter.use('/reservations', reservationsRouter)

export default apiRouter
