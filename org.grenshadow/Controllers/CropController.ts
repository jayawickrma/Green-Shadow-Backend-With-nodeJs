import {deleteCrop, getAllCrops, saveCrop, updateCrop} from "../Service/cropService";
import {CropDTO} from "../DTO/CropDTO";

class CropController{
    async saveCrop(req:any ,resp :any){
        try{
            const save =await saveCrop(req.body)
            resp.status(201).send(save)
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async deleteCrop(req:any ,resp:any){
        try{
            await deleteCrop(req.query['id'])
            resp.status(200).send("deleted successfully....")
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async getAllCrops(req:any ,resp:any){
        try{
            const all =await getAllCrops();
            resp.status(200).send(all)
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async updateCrop(req:any,resp:any){
        const id =req.query['id']
        const cropDto:CropDTO =req.body
        try{
            await updateCrop(id,cropDto)
            resp.status(200).send("updated successfully...")
        }catch (err){
            resp.status(500).send(err)
        }
    }
}
export default CropController;