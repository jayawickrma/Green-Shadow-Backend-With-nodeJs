import {Router} from "express";
import CropController from "../../Controllers/CropController";
import path from 'path'
import  multer from 'multer'

const storage =multer.diskStorage({
        destination: (req, file, cb) => {
                cb(null, 'org.grenshadow/Uploads/Crop')
        },
        filename:(req,file,cb)=>{
                cb(null,Date.now() +path.extname(file.originalname))
        }
});
const upload =multer({storage:storage})

class CropRoutes{
        router:Router;
        cropController:CropController;

        constructor() {
                this.router =Router()
                this.cropController =new CropController();
                this.initialRoutes();
        }
        initialRoutes():void{
                this.router.get('/getAllCrops',this.cropController.getAllCrops)
                this.router.post('/saveCrop',upload.single('cropImage'),this.cropController.saveCrop)
                this.router.delete('/deleteCrop',this.cropController.deleteCrop)
                this.router.put('/updateCrop',this.cropController.updateCrop)
        }
}
const cropRoutes:CropRoutes =new CropRoutes();

export default cropRoutes;