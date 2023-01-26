import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
dotenv.config();
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import { createServer } from "https";
import fs from "fs";
import { AxiosError } from "axios";
import { RegisterRoutes } from "../build/routes";
import cors from "cors";
import path from "path";
const nodeEnv = process.env.NODE_ENV?.trim();

const app = express();
const options =
  nodeEnv === "development"
    ? {
        key: fs.readFileSync(__dirname + "/ssl/localhost+3-key.pem"),
        cert: fs.readFileSync(__dirname + "/ssl/localhost+3.pem"),
      }
    : undefined;
const server =
  nodeEnv === "development" ? createServer(options!, app) : createServer(app);
const port = process.env.PORT || 3000;

var allowedOrigins = ["https://localhost:3001", "https://woyken.github.io"];
app.use(
  cors()
);

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "../public")));

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

export default app;
