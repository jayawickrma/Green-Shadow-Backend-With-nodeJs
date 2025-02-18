import {addField, deleteField, getAllFields, updateField} from "../Service/fieldService";
import {fieldDTO} from "../DTO/FieldDTo";

class FieldController{
    async saveField(req:any,resp:any){
        try{

            if (!req.file){
                resp.status(400).json({ message: "No file uploaded" });
                return
            }

            const data  =req.body;
            const image =req.file?.buffer.toString('base64');

            if (!data.staffList){
                data.staffList =[];
            }else {
                const staffList =data.staffList.split(',')
                const staffs:number[] =staffList.map(Number)
                data.staffList=staffs
            }

            if (!data.logList){
                data.logList =[];
            }else {
                const logList =data.logList.split(',')
                const logs:number[] =logList.map(Number)
                data.logList=logs
            }

            if (!data.cropList){
                data.cropList =[]
            }else {
                const cropList =data.cropList.split(',');
                const crops:number[] =cropList.map(Number);
                data.cropList=crops
            }


            const save =await addField(data,image);
            resp.status(201).send(save)
        }catch (err){
            console.log(err)
            resp.status(500).json(err)
        }
    }
    async deleteField(req:any,resp:any){
        const id =parseInt(req.query['id'])
        try{
            await deleteField(id);
            resp.status(200).send('deleted...')
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async updateField(req:any,resp:any){
        const id =parseInt(req.query['id'])
        const fieldDto:fieldDTO =req.body
        try{
            await updateField(id,fieldDto)
            resp.status(200).send("updated...")
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async getAllFields(req:any,resp:any){
        try{
            const all =await getAllFields();
            resp.status(200).send(all)
        }catch (err){
            resp.status(500).send(err)
        }
    }
}
export default FieldController;