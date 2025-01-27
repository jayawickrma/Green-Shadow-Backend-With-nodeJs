import {deleteStaff, getAllStaff, saveMember, updateStaff} from "../Service/staffService";

class StaffController{
    async saveStaff(req:any,resp:any){
            const staff =req.body
        try{
            await saveMember(staff);
            resp.status(201).send("saved Staff member...")
        }catch (err){
                resp.status(500).send(err)
        }
    }
    async deleteStaff(req:any,resp:any){
        const id =parseInt(req.query['id'])
        try{
            await deleteStaff(id)
                resp.status(200).send("staff id "+id+" member deleted..")
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async updateStaff(req:any,resp:any){
        const id =parseInt(req.query['id'])
        const data =req.body
        try{
            await updateStaff(id,data)
            resp.status(200).send("Member Updated...")
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async getAllStaff(req:any,resp:any){
        try{
            const all =await getAllStaff()
            resp.status(200)
        }catch (err){
            resp.status(500).send(err)
        }
    }
}
export default StaffController;