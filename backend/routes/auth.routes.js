//this file is for making api of authentication.


import express from "express";
import User from "../models/user.model.js";
import { signUp, signIn, logOut } from "../controllers/auth.controllers.js";

const authRouter = express.Router();


//api
authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.get("/logout", logOut);

export default authRouter;
