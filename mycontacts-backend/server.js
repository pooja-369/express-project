const express=require('express')
const connectDB=require('./config/dbConnection');
const dotenv=require('dotenv').config();
const errorhandler =require("./middleware/errorhandler");

connectDB();
const app=express();

const PORT =process.env.PORT||5000;

//middleware for parsing json request body
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorhandler);

app.listen(PORT,()=>{
    console.log(`server running ${PORT}`);
})