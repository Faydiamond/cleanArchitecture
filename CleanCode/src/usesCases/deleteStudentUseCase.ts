import {StudentEntity} from "../entities";
import {studentRepository} from "../repositories";

export const deleteUsersUseCase = async (id:number):Promise<Boolean>=>{
    const exists= await studentRepository.getByiD(id);
    if (!exists){
        return false;
    }   
    return await studentRepository.delete(id);
};