import express from "express";
import cors from "cors";
import { connectDb } from "./confiq/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userROutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

connectDb();
app.use("/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

//

//
