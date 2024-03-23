const express = require("express");

// Step 15.6 : validator middleware ko imoort karenge

const {signupSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
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
        //  STEP 7.4 : Register wale route me POST method karenge "auth-router.js" file me  

        // router.route("/register").get(authcontrollers.register);

                

        // router.route("/register").post(authcontrollers.register);

                // Step 15.6 : using validate middleware

                        router.route("/register").post( validate(signupSchema), authcontrollers.register);


        // Step 14.1 : login router banayenge

        router.route("/login").post(authcontrollers.login);

module.exports = router;