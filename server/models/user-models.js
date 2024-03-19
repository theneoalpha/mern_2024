const mongoose = require("mongoose");

// STEP 10.2 : Ek userSchema() method hota hai mongoose 
//             me jo help karta hai Schema(Structure) design karne me
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

// Step 10.3 : Defining the model or the collection name for users

const User = new mongoose.model("User",userSchema);



// Step 10.4 : User schema ko export karenge
module.exports = User;