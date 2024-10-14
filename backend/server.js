import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routers/foodRouter.js";
import userRouter from "./routers/userRouter.js";
import "dotenv/config";

//app configuration
const app = express();
const port = 4000;

//middlewares
app.use(express.json());
app.use(cors());

//db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
