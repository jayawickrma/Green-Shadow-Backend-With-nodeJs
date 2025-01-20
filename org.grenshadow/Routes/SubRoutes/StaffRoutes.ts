import {Router} from "express";
import StaffController from "../../Controllers/StaffController";

class StaffRoutes{
    router:Router
    staffController:StaffController

    constructor() {
        this.router=Router()
        this.staffController=new StaffController()
        this.initialRoutes()
    }
    initialRoutes():void{
        this.router.post('/saveStaff',this.staffController.saveStaff)
        this.router.put('/updateStaff',this.staffController.updateStaff)
        this.router.delete('/deleteStaff',this.staffController.deleteStaff)
        this.router.get('/getAllStaff',this.staffController.getAllStaff)
    }
}
const staffRoutes:StaffRoutes =new StaffRoutes()
export default staffRoutes;