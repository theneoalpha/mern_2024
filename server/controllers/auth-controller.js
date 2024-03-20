
// STEP 11.1 : Getting the user-models ko 

    const User = require("../models/user-models");
// Step 12.2 : bcrypt ko import kar rahe hai
    const bcrypt = require("bcryptjs");

const home = async (req,res)=>{
try{
    res
    .status(200)
    .send("Welcome to Home Page for testing purpose only with router");
}
catch(error){
        console.log(error);
}
};

const register = async (req,res)=>{
    try{
        // STEP 7.4 
        // res
        // .status(200)
        
        // .json({ message: "Welcome to Register Page for testing purpose only with router"});

      //   console.log(req.body);                // STEP 7.4.1 Console me POST json message dikhega

        

        
        // res
        // .status(200)
        // .json({ message: req.body});     //STEP 7.4.2 Json format me message POST jayega POSTMAN me


        // Step 11.2 : UserSchema ke according accept karenge

            // Step 11.2.1 :  Get Registration data
                 const {username, email, phone, password} = req.body;

            // Step 11.2.2 : Checking Existence of the email
                const userExist = await User.findOne({email:email}) ;
                
                if(userExist){
                    return res.status(400).json({msg:"Email already exists"});
                }

            //Step 12.3:  Hashing the password with bcrypt
            const saltRound = 10;       // jitna jyada utna more complex , timeconsuming and secure

            const hash_password = await bcrypt.hash(password, saltRound);





                // else part
              //  const userCreated = await User.create({username, email, phone, password});

                // Step 12.4 : Replacing the password
                const userCreated = await User.create({
                    username,
                    email,
                    phone,
                    password: hash_password});


                    res.status(200).json({msg : userCreated});






    }
    catch(error){
            res.status(400).send({msg:"Page not found"});
    }
    };

module.exports = {home, register};