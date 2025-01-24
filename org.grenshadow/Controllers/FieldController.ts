import {addField, deleteField, getAllFields, updateField} from "../Service/fieldService";
import {fieldDTO} from "../DTO/FieldDTo";

class FieldController{
    async saveField(req:any,resp:any){
        try{
            const save =await addField(req.body);
            resp.status(201).send(save)
        }catch (err){
            resp.status(500).send(err)
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