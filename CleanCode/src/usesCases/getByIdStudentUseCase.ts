import {StudentEntity} from "../entities";
import {studentRepository} from "../repositories";

export const listUserByIdUseCase = async (studentId:number):Promise<StudentEntity | null>=>{
    const exists = await studentRepository.getByiD(studentId);
    if (!exists){
        return null;
    }
    return exists;
};