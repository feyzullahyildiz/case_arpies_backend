import express, { json, Router } from "express";
import { dataRouter } from "./routes";

export const app = express();
app.use(json());

const api = Router();

api.use("/data", dataRouter());

app.use("/api", api);
