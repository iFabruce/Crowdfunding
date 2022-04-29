import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";
export const getPosts= async (req,res)=>{
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages)
        // const MyModel = mongoose.model('Test', new Schema({ name: String }));
        // // Works
        // const val= MyModel.findOne(function(error, result) { /* ... */ });

        res.status(200).json(postMessages);
    
    } catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
} 