//in this file we basically making logic for signup ,signin, logout


import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genToken from "../config/token.js";



//for signup
export const signUp= async(req,res)=>{
    try{
        const {userName,email,password}=req.body;

        const checkUserByUserName= await User.findOne({userName});
        if(checkUserByUserName){
            return res.status(400).json({message:"UserName already exists"});
        }

        const checkUserByEmail= await User.findOne({email});
        if(checkUserByEmail){
            return res.status(400).json({message:"Email already exists"});
        }

        if(password.length<6){
            return res.status(400).json({message:"Password should be more than 6 character"});
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const user=await User.create({
            userName,email,password:hashedPassword
        });

        const token=await genToken(user._id);
        
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            sameSite:"none",
            secure:false,
        });
        
        res.status(201).json(user);
      

    }catch(error){
        res.status(500).json({message:`signUp error: ${error}`});
    }
};




//for login
export const signIn= async(req,res)=>{
    try{
        const {email,password}=req.body;


        const user= await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User does not exists"});
        }

       

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400).json({message:`password invalid`});
        }



        const token=await genToken(User._id);
        
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            samSite:"none",
            secure:false,
        });
        
        res.status(200).json({message:"user loggined"});
      

    }catch(error){
        res.status(500).json({message:`signIn error: ${error}`});
    }
};


//for logout
export const logOut=async(req,res)=>{
    try{
        res.clearCookie("token");
        return res.status(200).json({message:"LogOut Successful"});
    }catch(error){
        res.status(500).json({message:"Logout error"});
    }
};