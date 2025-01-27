import express from 'express'
import mainRouter from "./org.grenshadow/Routes/MainRouter";
const app =express();
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/v1',mainRouter.router)


const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
  console.log('The server is starting on port '+PORT)
})
