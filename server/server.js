// Step 3.1 : Express.js ko get karenge
const express = require("express");

   // STEP 9.4 : ".env" file ko access karenge
   require("dotenv").config();

const app = express();

// Step 5.3: auth-router.js ke code ko import karenge
    const router = require('./router/auth-router');

    const connectDb = require("./utils/db");
  
 

    app.use(express.json()); // STEP 7.6 Middleware for JSON message dekhne ke liye

    app.use("/api/auth", router);
// Step 3.2 : Defining different routes
// app.get("/",(req,res)=>{

//     res.status(200).send("Welcome to Home Page for testing purpose only");
// })

 // Step 3.3 : Server ko start karenge and for accessing all the routes

const PORT = 5000;

// Step 8.2.3 : Database connection 

            // app.listen(PORT,()=>{
            //     console.log(`Server is running at port: ${PORT}`);
            // });
    connectDb().then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server is running at port: ${PORT}`);
        });
    })
