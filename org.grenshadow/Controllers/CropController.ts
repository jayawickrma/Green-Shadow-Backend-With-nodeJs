import {deleteCrop, getAllCrops, saveCrop, updateCrop} from "../Service/cropService";
import {CropDTO} from "../DTO/CropDTO";
import path from 'path';
import multer from 'multer';

class CropController{

    async  saveCrop(req: any, resp: any) {
        try {
            const cropDto:CropDTO =req.body
            console.log("Received Request Body:", cropDto);

            const savedCrop = await saveCrop(cropDto);
            resp.status(201).send(savedCrop);
        } catch (err) {
            console.error("Error Saving Crop:", err);
            // @ts-ignore
            resp.status(500).send({ error: "Failed to save crop", details: err.message });
        }
    }

    async deleteCrop(req:any ,resp:any){
        const id=parseInt(req.query['id'])
        try{
            await deleteCrop(id)
            console.log(id)
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
        const id =parseInt(req.query['id'])
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