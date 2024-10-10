import express from "express";
import cors from "cors";

//app configuration
const app = express();
const port = 4000;

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
