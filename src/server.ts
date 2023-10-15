import dotenv from "dotenv";
dotenv.config();
import { app } from "./app";

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const port = process.env.PORT ?? 8000;
app.listen(port, () => {
    console.log(`server started at ${port}`);
});
