import express from "express";
import { userRouter } from "./user.route.js";
import { recipeRouter } from "./recipe.route.js";

const indexRouter = express.Router();

indexRouter.use("/api/v1/user", userRouter);
indexRouter.use("/api/v1/rec", recipeRouter);

export { indexRouter };
