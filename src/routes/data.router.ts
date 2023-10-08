import { Router } from "express";
import { getData } from "../controllers/data.controller";

export const dataRouter = (): Router => {
    const router = Router();
    router.get("/", getData);
    return router;
};
