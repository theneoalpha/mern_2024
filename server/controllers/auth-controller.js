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

        console.log(req.body);                // STEP 7.4.1 Console me POST json message dikhega
        res
        .status(200)
        .json({ message: req.body});     //STEP 7.4.2 Json format me message POST jayega POSTMAN me
    }
    catch(error){
            res.status(400).send({msg:"Page not found"});
    }
    };

module.exports = {home, register};