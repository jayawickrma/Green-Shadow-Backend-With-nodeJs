import express from 'express'
import mainRouter from "./org.grenshadow/Routes/MainRouter";
const app =express();

const port =8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/v1',mainRouter.router)

app.listen(port,()=>{
  console.log('The server is starting on port '+port)
})
