import 'dotenv/config'
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js";
import fs from 'fs';
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
// import dotenv from 'dotenv'

const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log('Created uploads folder');
}


//appp config
const app = express()
const port = 5000


//middleware
app.use(express.json());
app.use(cors())

// db connection 
connectDB().catch(err => {
  console.error('Database connection failed: ',err);
  process.exit(1);
})

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)

})

//mongodb+srv://eden:eden@cluster0.vjpxkb6.mongodb.net/?