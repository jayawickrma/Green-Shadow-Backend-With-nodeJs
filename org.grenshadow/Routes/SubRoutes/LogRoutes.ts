import {Router} from "express";
import LogController from "../../Controllers/LogController";
import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });
class LogRoutes{
    router:Router
    logController:LogController

    constructor() {
        this.router =Router();
        this.logController=new LogController()
        this.initialRoutes();
    }
    initialRoutes():void{
        this.router.post('/addLog',upload.single('observedImage'),this.logController.saveLog)
        this.router.get('/getAllPosts',this.logController.getAllLogs)
        this.router.delete('/deleteLog',this.logController.deleteLog)
        this.router.put('/updateLog',this.logController.updateLog)
    }

}
const logRoutes:LogRoutes =new LogRoutes()
export default logRoutes;