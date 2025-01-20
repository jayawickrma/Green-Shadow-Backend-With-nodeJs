import {Router} from "express";

class MainRouter{
        router : Router;
        constructor() {
            this.router =Router()
            this.router.use('/field')
            this.router.use('/crop')
            this.router.use('/log')
            this.router.use('/equipment')
            this.router.use('/staff')
            this.router.use('/vehicle')
        }
}

const mainRouter:MainRouter =new MainRouter();
export default mainRouter;