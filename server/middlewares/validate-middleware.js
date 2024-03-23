// Step 15.5 Zod ke parseAsync method ko call karenge validate karne ke liye

const validate = (schema) => async (req, res, next) => {

    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();

    }
    catch(error){
        console.log(error);
        res.status(400).json({msg: "Validation failed"});
    }
};

module.exports = validate;