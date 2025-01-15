import express from 'express'
import CropController from "./org.grenshadow/Controllers/CropController"
const app =express();

app.use(express.json());
app.use('/crop',CropController)

app.listen(3000,()=>{
    console.log("server is started on port 3000")
})
