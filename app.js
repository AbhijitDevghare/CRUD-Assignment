require("dotenv").config();
const express=require("express");
const cors=require("cors");

const connectToDb=require("./config/database.js");


const  app=express();


//if json response

//express middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//Connection to the database
connectToDb();

//Getting Routes 

const userRoutes=require("./router/routes.js");

//If any request comes '/' followed by the path the  that  route will be served 
app.use("/",userRoutes);

module.exports=app;