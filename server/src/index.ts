import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config({ path: '.env.local' });
dotenv.config();
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import { createServer } from "https";
import fs from "fs";
import { AxiosError } from "axios";
import { RegisterRoutes } from "../build/routes";

const app = express();
const options = {
  key: fs.readFileSync(__dirname + "/ssl/key.pem"),
  cert: fs.readFileSync(__dirname + "/ssl/cert.pem"),
};
const server = createServer(options, app);
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

RegisterRoutes(app);

app.use(function handleErrors(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AxiosError) {
    if (err.response?.status)
      return res.status(err.response.status).send(err.response.data);
  }
  next(err);
});

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
