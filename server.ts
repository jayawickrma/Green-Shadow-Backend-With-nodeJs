import express from 'express'
import mainRouter from "./org.grenshadow/Routes/MainRouter";
const app =express();
const dotenv = require('dotenv');
import cors from 'cors';

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin: "http://localhost:5173",
  methods: ['GET','POST','PUT','PATCH','DELETE'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true,
}));
app.use('/api/v1',mainRouter.router)


const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
  console.log('The server is starting on port '+PORT)
})
