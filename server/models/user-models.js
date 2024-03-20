const mongoose = require("mongoose");

// STEP 10.2 : Ek userSchema() method hota hai mongoose 
//             me jo help karta hai Schema(Structure) design karne me

const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});


// Step 12.5 : Securing the password with pre-Method using bcrypt
// Database me save hone se pahle (pre-method) ye function run hoga
        userSchema.pre('save', async function(next){

   //  console.log("pre-method", this);             // "this" saare data ko show kara dega 
        const user = this;

        if(!user.isModified('password')){
            next();
        }

        // Agar Password fist time create ho raha hai tabb

        try{

            const saltRound = await bcrypt.genSalt(10);
            const hash_password = await bcrypt.hash(user.password, saltRound);

            user.password = hash_password;



        }
        catch(error){
            next(error);
        }




})



// Step 10.3 : Defining the model or the collection name for users

const User = new mongoose.model("User",userSchema);



// Step 10.4 : User schema ko export karenge
module.exports = User;