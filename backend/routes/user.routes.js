
import express from "express";
import { getCurrentUser } from "../controllers/user.controllers.js";
import isAuth from "../middlewares/isAuth.js";


const userRouter = express.Router();


//api route
userRouter.post("/current",isAuth, getCurrentUser);

export default userRouter;
