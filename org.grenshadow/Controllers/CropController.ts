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

                    if (!data.fieldList){
                            data.fieldList=[]
                            data.logList =[]
                    }else {
                        data.fieldList =data.fieldList.split(',')
                        data.logList =data.logList.split(',')
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