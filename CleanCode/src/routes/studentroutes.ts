import { Router } from "express";
import { StudentController } from "../controllers";
import { StudentRepository } from "../repositories";

export class studentRoutes{
    static get routes() : Router{
        const router = Router();
        const repo = new StudentRepository();
        const controller = new StudentController(repo);

        router.post("/",controller.createStudent);
        router.get("/:id",controller.getStudentById);
        router.get("/",controller.getStudentList);
        router.patch("/:id",controller.updateStudent);
        router.delete("/:id",controller.deleteStudent);
        return router;
    }
}
