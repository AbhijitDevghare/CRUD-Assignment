const mongoose=require("mongoose");


const connectToDb=async ()=>{
    mongoose.connect("mongodb+srv://abhi_dev04:arisandh76@cluster0.djuqmro.mongodb.net/User")
    .then((conn)=>{
        console.log(`Connected to the Database ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log(err.message);
        process.exit(1);
    })
    
}

module.exports=connectToDb;