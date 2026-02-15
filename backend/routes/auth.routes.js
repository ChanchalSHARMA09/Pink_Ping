//this file is for making api of authentication.


import express from "express";
import User from "../models/user.model.js";
import { signUp, signIn, logOut } from "../controllers/auth.controllers.js";

const authRouter = express.Router();


//api route
authRouter.post("/signup", signUp);
authRouter.post("/login", signIn);
authRouter.get("/logout", logOut);

export default authRouter;
