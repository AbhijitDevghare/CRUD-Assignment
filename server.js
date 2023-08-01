const app=require("./app.js");


const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`The server is running on the port ${PORT}`);
});