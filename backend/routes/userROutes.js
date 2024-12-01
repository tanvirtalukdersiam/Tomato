import express from "express";
import { loginUser, registrationUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registrationUser);

export default userRouter;
