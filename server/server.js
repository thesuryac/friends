import express, { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import router from "./routes/userRoutes.js";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/", router);

app.listen(port, () => {
  console.log(`server is on http://localhost:${port}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    stack: err.stack,
  });
});
