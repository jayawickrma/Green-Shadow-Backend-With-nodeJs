import {Router} from "express";
import CropRoutes from "./SubRoutes/CropRoutes";
import FieldRoutes from "./SubRoutes/FieldRoutes";
import EquipmentRoutes from "./SubRoutes/EquipmentRoutes";
import LogRoutes from "./SubRoutes/LogRoutes";
import StaffRoutes from "./SubRoutes/StaffRoutes";
import VehicleRoutes from "./SubRoutes/VehicleRoutes";
import userRoutes from "./SubRoutes/UserRoutes";
import {authenticateToken} from "../Utill/AuthenticateUser";
class MainRouter{
        router : Router;

        constructor() {
            this.router =Router()
            this.router.use('/auth',userRoutes.router)
            this.router.use('/field',authenticateToken,FieldRoutes.router)
            this.router.use('/crop',authenticateToken,CropRoutes.router)
            this.router.use('/log',authenticateToken,LogRoutes.router)
            this.router.use('/equipment',authenticateToken,EquipmentRoutes.router)
            this.router.use('/staff',authenticateToken,StaffRoutes.router)
            this.router.use('/vehicle',authenticateToken,VehicleRoutes.router)
        }
}

const mainRouter:MainRouter =new MainRouter();
export default mainRouter;