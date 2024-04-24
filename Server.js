const express = require('express');

const app = express();

const connectdb= require('./config/connectDB');

const userSchema = require("./Models/userModel");
const userRouter = require('./routers/userRouter');

require('dotenv').config();

connectdb();

// app.use (express.json())
// app.use('/api', personRouter)
app.use (express.json())
app.use("/api" , userRouter)


const port = process.env.PORT;

app.listen(port, () => console.log("Server is running on port")) 