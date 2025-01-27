import {Router} from "express";
import userController from "../../Controllers/UserController";
import UserController from "../../Controllers/UserController";

class UserRoutes{
    router:Router
    userController :UserController

    constructor() {
        this.router =Router()
        this.userController =new UserController()
        this.initialStates()
    }
    initialStates():void{
        this.router.post('/signIn',this.userController.signIn)
        this.router.post('/signUp',this.userController.signUp)
    }
}
const userRoutes:UserRoutes =new UserRoutes()
export default userRoutes;