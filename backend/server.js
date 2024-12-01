import express from "express";
import cors from "cors";
import { connectDb } from "./confiq/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userROutes.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

connectDb();
app.use("/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

//

//
