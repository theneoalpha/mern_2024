const express = require("express");

// express.routes class hai aur iss class ko use karenge routing define karne ke liye

const router = express.Router();

const authcontrollers = require("../controllers/auth-controller");


// METHOD 1
        // router.get("/register",(req,res)=>{

        //     res.status(200).send("Welcome to Home Page for testing purpose only with router");
        // });


// METHOD 2

        // Step 5.4 : Router method ke andar ek routes method hai vo bhi use kar sakte hai 

// STEP 5
/*
        router.route("/").get((req,res)=>{

            res.status(200).send("Welcome to Home Page for testing purpose only with router");
        });

        router.route("/register").get((req,res)=>{

            res.status(200).send("Welcome to Register Page for testing purpose only with router");
        });
*/

 // STEP 6       
 
        router.route("/").get(authcontrollers.home);
        router.route("/register").get(authcontrollers.register);

module.exports = router;