import {deleteCrop, getAllCrops, saveCrop, updateCrop} from "../Service/cropService";
import {CropDTO} from "../DTO/CropDTO";

class CropController{

    async  saveCrop(req:any,resp:any) {
       try{
            if (!req.file){
                resp.status(400).json({ message: "No file uploaded" });
                return
            }


           const data  =req.body;
           const image =req.file?.buffer.toString('base64');

                   if (!data.logList) {
                       data.logList = []
                   } else {
                       const logList= data.logList.split(',');
                       data.logList = logList.map(Number);
                   }

                   if (!data.fieldList) {
                       data.fieldList = []
                   } else {
                       const fieldList =data.fieldList.split(',')
                       data.fieldList =fieldList.map(Number)
                   }


           const save =await saveCrop(data,image)
                resp.status(201).json(save)

       }catch (err){
           console.log(err)
           resp.status(500).send(err)
       }
    }

    async deleteCrop(req:any ,resp:any){
        const id=parseInt(req.query['id'])
        console.log(id)
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