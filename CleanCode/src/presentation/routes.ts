import { Router } from "express";
import { studentRoutes } from "../routes";

export class AppRoutes {

    static get routes():Router{
        const router = Router();
        router.use("/api/v1/student",studentRoutes.routes)

        return router;
    }
}