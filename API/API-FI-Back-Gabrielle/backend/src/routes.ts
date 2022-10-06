import {Router,  Request, Response} from 'express'
import { getUserGab, getUsersGab, saveUserGab, updateUserGab, removeUserGab} from './controller/UserController'

const routes = Router()

routes.get('/Users',getUsersGab)
routes.get('/User/:id',getUserGab)
routes.post('/User',saveUserGab)
routes.put('/User/:id',updateUserGab)
routes.delete('/User/:id',removeUserGab)

routes.get('/Paciente',getUsersGab)
routes.get('/Paciente/:id',getUserGab)
routes.post('/Paciente',saveUserGab)
routes.put('/Paciente/:id',updateUserGab)
routes.delete('/Paciente/:id',removeUserGab)

export default routes