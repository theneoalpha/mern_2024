const mongoose = require("mongoose");



const URI = "mongodb+srv://theneoalpha:VikashKaushik@cluster0.nkno9.mongodb.net/?retryWrites=true&w=majority";
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

