import {Router} from "express";
import VehicleController from "../../Controllers/VehicleController";
class VehicleRoutes{
    router :Router
    vehicleController:VehicleController

    constructor() {
        this.router =Router()
        this.vehicleController =new VehicleController();
        this.initialRoutes()
    }
    initialRoutes():void{
        this.router.post('/saveVehicle',this.vehicleController.saveVehicle)
        this.router.get('/getAllVehicles',this.vehicleController.getAllVehicles)
        this.router.delete('/deleteVehicle',this.vehicleController.deleteVehicle)
        this.router.put('/updateVehicle',this.vehicleController.updateVehicle)
    }
}
const vehicleRoutes:VehicleRoutes =new VehicleRoutes()
export default vehicleRoutes;