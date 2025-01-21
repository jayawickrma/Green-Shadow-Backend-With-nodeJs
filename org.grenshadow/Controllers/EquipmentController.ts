import {EquipmentDTO} from "../DTO/EquipmentDTO";
import {deleteEqu, getAllEqu, saveEqu, updateEqu} from "../Service/equipmentService";
class EquipmentController{
    async saveEquipment(req:any ,resp:any){
        try{
            const save =await saveEqu(req.body)
            resp.status(202).send(save)
            console.log("saved..")
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async deleteEquipment(req:any,resp:any){
        const id =parseInt(req.query['id'])
        try{
            await deleteEqu(id)
            resp.status(200).send('deleted...')
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async updateEquipment(req:any,resp:any){
        const id =parseInt(req.query['id'])
        const equ:EquipmentDTO =req.body

        try{
            await updateEqu(id,equ)
            resp.status(200).send("Updated...")
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async getAllEquipment(req:any,resp:any){
        try{
            const all =await getAllEqu()
            resp.status(200).send(all)
        }catch (err){
            resp.status(500).send(err)
        }
    }
}
export default EquipmentController;