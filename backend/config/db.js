//In this File we are connecting the mongoose/mongoDb to project.

import mongoose from "mongoose";

const connectDb= async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("db connected");
    }catch(error){
        console.log("db error: ",error);
    }
};

export default connectDb;