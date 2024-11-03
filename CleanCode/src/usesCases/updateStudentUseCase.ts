import {StudentEntity} from "../entities";
import {studentRepository} from "../repositories";

export const updateUsersUseCase = async (id:number,student:StudentEntity):Promise<StudentEntity | null>=>{
    const exists= await studentRepository.getByiD(id);
    if (!exists){
        return null;
    }
    const updatedStudent={ ...exists, ...student};
    return await studentRepository.update(id,updatedStudent);
};