import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter from'./routes/user.route.js';
import authRouter from'./routes/auth.route.js';

dotenv.config();

mongoose
.connect(process.env.MONGODB)
.then(()=> {
    console.log('Connected to MONGO DB!');
})
.catch((err)=>{
    console.log(err);
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample route (optional)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

// Middleware
app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message||'Internal Server Error';
  return res.status(statusCode).json({
    success:false,
    statusCode:statusCode,
    message,
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
