import {Router} from "express";
import CropController from "../../Controllers/CropController";
import multer from "multer";


const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });

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