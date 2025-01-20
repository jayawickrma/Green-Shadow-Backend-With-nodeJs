import express from 'express'
import mainRouter from "./org.grenshadow/Routes/MainRouter";
const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('api/v1',mainRouter.router)

app.listen(3000,()=>{
  console.log('The server is starting on port 3000')
})
