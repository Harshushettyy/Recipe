import express from "express";
import { createUser } from "../controllers/user/createUser.js";
import { deleteUser } from "../controllers/user/deleteUser.js";
import { login } from "../controllers/user/login.js";

export const userRouter = express.Router();

userRouter.post("/newuser", createUser);
userRouter.delete("/deleteuser", deleteUser);
userRouter.get("/login", login);
