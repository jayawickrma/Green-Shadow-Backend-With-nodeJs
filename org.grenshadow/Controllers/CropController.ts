import {deleteCrop, getAllCrops, saveCrop, updateCrop} from "../Service/cropService";
import {CropDTO} from "../DTO/CropDTO";
import  multer from 'multer'
import path from 'path'

const storage =multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() +path.extname(file.originalname))
    }
});
const upload =multer({storage:storage})
class CropController{
    async saveCrop(req:any ,resp :any){
        console.log(req.body)
        try{
            const save =await saveCrop(req.body)
            console.log(save)
            resp.status(201).send(save)
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async deleteCrop(req:any ,resp:any){
        const id=parseInt(req.query['id'])
        try{
            await deleteCrop(id)
            console.log(id)
            resp.status(200).send("deleted successfully....")
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async getAllCrops(req:any ,resp:any){
        try{
            const all =await getAllCrops();
            resp.status(200).send(all)
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async updateCrop(req:any,resp:any){
        const id =parseInt(req.query['id'])
        const cropDto:CropDTO =req.body
        try{
            await updateCrop(id,cropDto)
            resp.status(200).send("updated successfully...")
        }catch (err){
            resp.status(500).send(err)
        }
    }
}
export default CropController;