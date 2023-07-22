const express=require('express')
require('dotenv').config();
const app=express();
const PORT =process.env.PORT||5000;

//middleware for parsing json request body
app.use("/api/contacts",require("./routes/contactRoutes"));
app.listen(PORT,()=>{
    console.log(`server running ${PORT}`);
})