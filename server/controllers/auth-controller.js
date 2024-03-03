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
        res
        .status(200)
        .send("Welcome to Register Page for testing purpose only with router");
    }
    catch(error){
            res.status(400).send({msg:"Page not found"});
    }
    };

module.exports = {home, register};