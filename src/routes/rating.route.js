import express from "express";

export const indexRouter = express.Router();

indexRouter.post("/food/v1/rating", giveRating);
