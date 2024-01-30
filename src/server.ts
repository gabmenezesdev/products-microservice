import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

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
  console.error(err.stack);
  const errorMessage = err.status ? err.message : "Erro interno no servidor";
  const statusCode = err.status || 500;
  return res.status(statusCode).json({ message: errorMessage });
});

app.listen(process.env.PORT, () => {
  console.log("Servidor Online");
});

export { app };
