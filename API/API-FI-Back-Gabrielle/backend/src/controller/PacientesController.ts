import { PacientesGAB } from './../entity/PacientesGAB';
import { AppDataSource } from "../data-source"
import { Request,  Response } from "express"



export const getUsersGab = async (request:Request, response: Response) => {
    const users = await AppDataSource.getRepository(PacientesGAB).find()
return response.json (users)
};

export const getUserGab = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(PacientesGAB).findOneBy(id)
    return response.json (user)
};

export const saveUserGab = async (request:Request, response: Response) => {
    const user = await AppDataSource.getRepository(PacientesGAB).save(request.body)
return response.json(user)
}

export const updateUserGab = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(PacientesGAB).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(PacientesGAB).findOneBy(id)
        response.json(userUpdated)
    }
    return response.status(404).json({message: 'Paciente not found!'})
};

export const removeUserGab = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(PacientesGAB).delete(id)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(PacientesGAB).findOneBy(id)
        return response.json({message: 'Paciente file removed'})
    }
    return response.status(404).json({message: 'Paciente not found!'})
};





