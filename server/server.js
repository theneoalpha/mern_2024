// Step 1 : Express.js ko get karenge
const express = require("express");

const app = express();

// Step 2 : Defining different routes
app.get("/",(req,res)=>{

    res.status(200).send("Welcome to Home Page for testing purpose only");
})

 // Step 3 : Server ko start karenge and for accessing all the routes

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
});