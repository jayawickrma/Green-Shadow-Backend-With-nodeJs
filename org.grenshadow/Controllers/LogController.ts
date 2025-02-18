import {LogDTO} from "../DTO/LogDTO";
import {deleteLog, getAllLogs, saveLog, updateLog} from "../Service/logService";

class LogController{
    async saveLog(req:any,resp:any){
        try{
            const logDto =req.body


            if (!req.file){
                resp.status(400).json({ message: "No file uploaded" });
                return
            }

            const image =req.file.buffer.toString('base64');


            if (!logDto.staffList){
                logDto.staffList =[];
            }else {
                const staffList =logDto.staffList.split(',')
                logDto.staffList=staffList.map(Number)
            }
            if (!logDto.cropList){
                logDto.cropList =[]
            }else {
                const cropList =logDto.cropList.split(',');
                logDto.cropList=cropList.map(Number)
            }

            if (!logDto.fieldList) {
                logDto.fieldList = []
            } else {
                const fieldList =logDto.fieldList.split(',')
                logDto.fieldList =fieldList.map(Number)
            }

            const save=await saveLog(logDto,image)
            resp.status(201).json("Saved...")
        }catch (err){
            console.log(err)
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