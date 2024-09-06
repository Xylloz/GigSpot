import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import connectMongoDB from "./db/database";
import router from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectMongoDB();

app.use("/", router);

// Root path
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello backend!" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
