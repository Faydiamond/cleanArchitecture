import {StudentEntity} from "../entities";
import {studentRepository} from "../repositories";

export const listUsersUseCase = async ():Promise<StudentEntity[]>=>{
    return await studentRepository.getAll();
};