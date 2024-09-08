import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import connectMongoDB from "./db/database";
import router from "./routes/";
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

connectMongoDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use("/", router);

// Root path
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello backend!" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
