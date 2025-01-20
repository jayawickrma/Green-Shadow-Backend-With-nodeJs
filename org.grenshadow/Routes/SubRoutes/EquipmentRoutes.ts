import {Router} from "express";
import EquipmentController from "../../Controllers/EquipmentController";

class EquipmentRoutes{
        router:Router;
        equipmentController:EquipmentController;

        constructor() {
            this.router=Router()
            this.equipmentController=new EquipmentController()
            this.initialRoutes();
        }
        initialRoutes():void{
            this.router.post('/addEquipment',this.equipmentController.saveEquipment)
            this.router.put('/updateEquipment',this.equipmentController.updateEquipment)
            this.router.delete('/deleteEquipment',this.equipmentController.deleteEquipment)
            this.router.get('/getAllEquipment',this.equipmentController.getAllEquipment)
        }
}
const equipmentRoutes:EquipmentRoutes =new EquipmentRoutes();
export default equipmentRoutes;