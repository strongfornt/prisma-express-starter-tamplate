import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./app/router";
import notFound from "./app/middleware/not.found";
import globalErrorHandler from "./app/middleware/gloabalError";

const app: Application = express();

app.use(cors());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "E com server running..",
  });
});

//applications routes
app.use("/api", router);

// // global error handlers
app.use(notFound);
app.use(globalErrorHandler);

export default app;
