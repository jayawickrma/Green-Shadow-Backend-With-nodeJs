import {Router} from "express";
import LogController from "../../Controllers/LogController";

class LogRoutes{
    router:Router
    logController:LogController

    constructor() {
        this.router =Router();
        this.logController=new LogController()
        this.initialRoutes();
    }
    initialRoutes():void{
        this.router.post('/addLog',this.logController.saveLog)
        this.router.get('/getAllPosts',this.logController.getAllLogs)
        this.router.delete('/deleteLog',this.logController.deleteLog)
        this.router.put('/updateLog',this.logController.updateLog)
    }

}
const logRoutes:LogRoutes =new LogRoutes()
export default logRoutes;