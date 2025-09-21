import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import restaurantRouter from './routes/RestaurentRoutes.js'
import userRouter from './routes/UserRoutes.js';
import reviewRouter from './routes/ReviewRoutes.js';
const app=express();
const port=5000;
app.use(cors());
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(()=> console.log("connected to MongoDb"))
.catch((error)=> console.log(error));   

app.get("/", (req,res)=>{
    res.send("running backend");
})

app.use("/api/restaurants",restaurantRouter);
app.use("/api/user",userRouter);
app.use("/api/review",reviewRouter);


app.listen(port,() => console.log(`server listening at  http://localhost:${port}`));
