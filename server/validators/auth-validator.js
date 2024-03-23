const {z} = require("zod");

// Step 15.3 object schema create karenge

    const signupSchema = z.object({
        username: z
        .string({required_error:"Name is required"})
        .trim()
        .min(3,{message:"Name must be atleast of 3 characters"})
        .max(255,{message:"Name must not be more than 255 characters"}),

        email: z
        .string({required_error:"Email is required"})
        .trim()
        .email({message:"Invalid Email address"})
        .min(3,{message:"Email must be atleast of 3 characters"})
        .max(255,{message:"Email must not be more than 255 characters"}),
        
        
        phone: z
        .string({required_error:"Phone Number is required"})
        .trim()
        .min(10,{message:"Phone Number must be atleast of 10 characters"})
        .max(12,{message:"Phone Number must not be more than 255 characters"}),

        password: z
        .string({required_error:"Password is required"})
        .min(7,{message:"Password must be atleast of 7 characters"})
        .max(1024,{message:"Password must not be more than 1024 characters"}),

        


    });

    module.exports = signupSchema;

