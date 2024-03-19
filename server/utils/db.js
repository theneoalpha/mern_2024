const mongoose = require("mongoose");


// STEP 9.3 : url ko access karenge ".env" file se


//   const URI = "mongodb+srv://yashkaushik079:VikashKaushik@cluster0.1nsaabc.mongodb.net/mern_2024?retryWrites=true&w=majority&appName=Cluster0";
     
     const URI = process.env.MONGODB_URI;

// mongoose.connect(URI);

// Step 8.2.2 : Database connect karenge

const connectDb = async () =>{

    try{
            await mongoose.connect(URI);
            console.log('Connection successful to database');
    }
    catch(error){
        console.error("Databse connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;

