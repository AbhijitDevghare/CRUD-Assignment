const mongoose=require("mongoose");

const user=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"The name is required"],
        maxLength:  [30,"The name of the user should be less than 30 characters"],
    },
    email:{
        type:String,
        required:[true,"The email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        maxLength:  [12,"The password must be less than 12 characters"],
    }
});

module.exports=mongoose.model("user",user);