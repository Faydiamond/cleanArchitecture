import {StudentEntity} from "../entities";
import {studentRepository} from "../repositories";

export const createUserUseCase = async (student:StudentEntity):Promise<StudentEntity | null>=>{
    return await studentRepository.create(student);
};