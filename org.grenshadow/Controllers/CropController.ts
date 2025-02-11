import {deleteCrop, getAllCrops, saveCrop, updateCrop} from "../Service/cropService";
import {CropDTO} from "../DTO/CropDTO";
import e from "express";

class CropController{

    async  saveCrop(req:any,resp:any) {
       try{
            if (!req.file){
                resp.status(400).json({ message: "No file uploaded" });
                return
            }
            const file =req.file;
            const base64 =file?.buffer.toString('base64');


            const data  =req.body;

            if (!data.fieldList){
                    data.fieldList=[]
                    data.logList =[]
            }else {
                data.fieldList =data.fieldList.split(',')
                data.logList =data.logList.split(',')
            }

           const save =await saveCrop(data)
                req.status(201).json(save)

       }catch (err){
           resp.status(500).send(err)
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