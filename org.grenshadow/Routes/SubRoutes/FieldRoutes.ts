import {Router} from "express";
import FieldController from "../../Controllers/FieldController";

class FieldRoutes{
    router:Router;
    fieldController:FieldController

    constructor() {
        this.router=Router()
        this.fieldController =new FieldController();
        this.initialRoutes();
    }
    initialRoutes():void{
        this.router.post('/addField',this.fieldController.saveField)
        this.router.delete('/deleteField',this.fieldController.deleteField)
        this.router.put('/updateField',this.fieldController.updateField)
        this.router.get('/getAllField',this.fieldController.getAllFields)
    }
}
const fieldRoutes:FieldRoutes =new FieldRoutes()
export default fieldRoutes;