import {Router,  Request, Response} from 'express'
import { getUserGab, getUsersGab, saveUserGab, updateUserGab, removeUserGab} from './controller/UserController'



const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json( {message: 'hello Word!'})
}) 

routes.get('/UsersGAB',getUsersGab)
routes.get('/UserGAB/:id',getUserGab)
routes.post('/UserGAB',saveUserGab)
routes.put('/UserGAB/:id',updateUserGab)
routes.delete('/UserGAB/:id',removeUserGab)

export default routes