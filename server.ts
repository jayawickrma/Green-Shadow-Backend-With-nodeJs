import express from 'express'
import CropController from "./org.grenshadow/Controllers/CropController"
const app =express();

app.use(express.json());
app.use('/crop',CropController)

app.listen(3000,()=>{
  console.log('The server is starting on port 3000')
})
