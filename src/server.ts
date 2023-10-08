import dotenv from "dotenv";
import { app } from "./app";
dotenv.config();

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const port = process.env.PORT ?? 8000;
app.listen(port, () => {
    console.log(`server started at ${port}`);
});
