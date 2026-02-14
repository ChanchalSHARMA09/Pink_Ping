import express from "express";
import User from "../models/user.model.js";
import { signUp, signIn, logOut } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.post("/logout", logOut);

export default authRouter;
