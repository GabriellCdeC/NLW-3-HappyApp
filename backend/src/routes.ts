import { Router }  from 'express'
import multer from 'multer'

import OrphangesController from './controllers/OrthanagesController'
import uploadConfig from './config/upload'

const routes = Router()
const upload = multer(uploadConfig)


routes.get('/orphanages', OrphangesController.index)
routes.get('/orphanages/:id', OrphangesController.show)
routes.post('/orphanages', upload.array('images') ,OrphangesController.create)

export default routes