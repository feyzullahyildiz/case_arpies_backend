import { DataService } from "../services/data.service";
import type { RequestHandler } from "express";

export const getData: RequestHandler = (req, res) => {
    const data = DataService.getData();
    res.json(data);
};
