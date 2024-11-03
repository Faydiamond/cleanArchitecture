import {Request,Response} from "express";
import { StudentRepository } from "../repositories";
import { StudentEntity } from "../entities";

export class StudentController {
    constructor(
        private readonly studentRepository : StudentRepository
    ){}

    createStudent = (req:Request,res:Response)=>{
        const student = new StudentEntity(
            0,
            req.body.name,
            req.body.nationality,
            req.body.carrer,
            req.body.password,
            req.body.phone,
            req.body.age
        )

        this.studentRepository.create(student).
        then(student=> res.json(student)).
        catch(err=> res.status(400).json(err));
    }

    getStudentList = (req:Request,res:Response)=>{
        this.studentRepository.getAll().
        then(students=> res.json(students)).
        catch(err=> res.status(400).json(err));
    }

    getStudentById = (req:Request,res:Response)=>{
        const {id} = req.params;
        this.studentRepository.getByiD( parseInt(id)).
        then(student=> res.json(student)).
        catch(err=> res.status(400).json(err));
    }

    updateStudent = (req:Request,res:Response)=>{
        const {id} = req.params;
        const student = new StudentEntity(
            parseInt(id),
            req.body.name,
            req.body.nationality,
            req.body.carrer,
            req.body.password,
            req.body.phone,
            req.body.age
        )

        this.studentRepository.update( parseInt(id), student).
        then(student=> res.json(student)).
        catch(err=> res.status(400).json(err));
    }

    deleteStudent = (req:Request,res:Response)=>{
        const {id} = req.params;
        this.studentRepository.delete( parseInt(id)).
        then(student=> res.json({ deleted:student})).
        catch(err=> res.status(400).json(err));
    }
}
