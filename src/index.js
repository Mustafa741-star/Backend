// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

const port = process.env.PORT;

dotenv.config({
    path: './env'
});

connectDB().then(() =>{
    app.listen(port || 8000, () =>{
        console.log(`Mustafa Your Server is Running at Port: ${port}`);
        
    })
}).catch((err) =>{
    console.log("MONGO DB CONNECTION FAILED !!!", err);
    
})
