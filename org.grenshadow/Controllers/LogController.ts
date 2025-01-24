import {exec} from "child_process";
import {LogDTO} from "../DTO/LogDTO";
import {deleteLog, getAllLogs, saveLog, updateLog} from "../Service/logService";
import {updateEqu} from "../Service/equipmentService";

class LogController{
    async saveLog(req:any,resp:any){
        const logDto:LogDTO =req.body
        try{
            const save=await saveLog(logDto)
            resp.status(201).send(save,"Saved...")
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async deleteLog(req:any,resp:any){
        const id =parseInt(req.query['id'])
        try{
            await deleteLog(id)
            resp.status(200).send("successfully deleted "+id)
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async updateLog(req:any,resp:any){
        const id =parseInt(req.query['id'])
        const l:LogDTO=req.body
        try{
            await updateLog(id,l)
            resp.status(200).send("updated...")
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async getAllLogs(req:any,resp:any){
        try{
            const getAll =await getAllLogs()
                if (getAll){
                    resp.status(200).send(getAll)
                }
        }catch (err){
            resp.status(500).send(err)
        }
    }
}
export default LogController;