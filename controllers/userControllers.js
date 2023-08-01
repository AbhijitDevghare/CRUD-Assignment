const User=require("../model/userSchema.js");
const emailValidator=require("email-validator");

exports.home= (req,resp)=>{
    resp.send("Welcome To The Home Page");
}

//Signup Controller

exports.register=async (req,resp)=>{

    try
    {
        //Check if all fields are filled
        const {username,email,password}=req.body

        if(!username || !email || !password)
        {
            throw new Error(`All fields are required`);
        }
        

        //Email Validation

        const validEmail=emailValidator.validate(email);
        if(!validEmail)
        {
            return resp.status(400).json({
                success:false,
                message:"Email must be valid"
            })
        }

        //If user already exists

        const userExists= await User.findOne({email});

        if(userExists)
        {
            throw new Error(`User already exists`)
        }
       
        //create a user

        const user=await User.create({
            username,
            email,
            password
        });


        resp.status(200).json({
            success:true,
            message:`User Registered Successfully`,
            
        })

    }catch(err){
        console.log(err.message);
        resp.status(400).json({
            success:false,
            message:err.message,
        })
    }
}

//signin controller

exports.login=async (req,resp)=>{

    try
    {
        //Check if all fields are filled
        const {username,password}=req.body

        if(!username || !password)
        {
            throw new Error(`All fields are required`);
        }

        //Find a username with validate password
        const user =  await User.findOne({username}).select("+password")
        
        if(!user || password!=user.password)
        {
            return resp.status(400).json({
                suceess:false,
                message:"Invalid Credentials"
            })
        }

        resp.status(200).json({
            success:true,
            message:`User Login Successfuly`,
        })

    }catch(err){
        console.log(err.message);
        resp.status(400).json({
            success:false,
            message:err.message,
        })
    }
}




