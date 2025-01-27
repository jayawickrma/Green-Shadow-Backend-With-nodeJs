import {Router} from "express";
import CropRoutes from "./SubRoutes/CropRoutes";
import FieldRoutes from "./SubRoutes/FieldRoutes";
import EquipmentRoutes from "./SubRoutes/EquipmentRoutes";
import LogRoutes from "./SubRoutes/LogRoutes";
import StaffRoutes from "./SubRoutes/StaffRoutes";
import VehicleRoutes from "./SubRoutes/VehicleRoutes";
import userRoutes from "./SubRoutes/UserRoutes";
class MainRouter{
        router : Router;

        constructor() {
            this.router =Router()
            this.router.use('/auth',userRoutes.router)
            this.router.use('/field',FieldRoutes.router)
            this.router.use('/crop',CropRoutes.router)
            this.router.use('/log',LogRoutes.router)
            this.router.use('/equipment',EquipmentRoutes.router)
            this.router.use('/staff',StaffRoutes.router)
            this.router.use('/vehicle',VehicleRoutes.router)
        }
}

const mainRouter:MainRouter =new MainRouter();
export default mainRouter;