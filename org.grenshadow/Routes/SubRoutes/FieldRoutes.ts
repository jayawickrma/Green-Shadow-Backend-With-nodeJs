import {Router} from "express";
import FieldController from "../../Controllers/FieldController";
import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });
class FieldRoutes{
    router:Router;
    fieldController:FieldController

    constructor() {
        this.router=Router()
        this.fieldController =new FieldController();
        this.initialRoutes();
    }
    initialRoutes():void{
        this.router.post('/addField',upload.single('fieldImage'),this.fieldController.saveField)
        this.router.delete('/deleteField',this.fieldController.deleteField)
        this.router.put('/updateField',this.fieldController.updateField)
        this.router.get('/getAllField',this.fieldController.getAllFields)
    }
}
const fieldRoutes:FieldRoutes =new FieldRoutes()
export default fieldRoutes;