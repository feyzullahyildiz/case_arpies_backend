import express, { json, Router } from "express";
import { dataRouter } from "./routes";
import cors from "cors";

export const app = express();
app.use(cors());
app.use(json());

const api = Router();

api.use("/data", dataRouter());

app.use("/api", api);
