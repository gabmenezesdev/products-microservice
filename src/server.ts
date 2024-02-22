import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

// DB connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://mongodbdatabase:27017/ecommerce"
);

// Service validation route
app.get("/ping", (req, res) => {
  return res.send("Service online!");
});

// Allow all origins
app.use(cors());

// Service routes
app.use("/api/", router);

// swagger doc
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Error handling
app.use(function error(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errorMessage = err.status ? err.message : "Server internal error";
  const statusCode = err.status || 500;
  return res.status(statusCode).json({ message: errorMessage });
});

app.listen(process.env.PORT, () => {
  console.log("Server Online");
});

export { app };
