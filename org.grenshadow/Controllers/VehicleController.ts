import {addVehicle, deleteVehicle, getAllVehicles, updateVehicle} from "../Service/vehicleService";

class VehicleController{
    async saveVehicle(req:any,resp:any){
        try{
               const save =await addVehicle(req.body)
                resp.status(201).json("Vehicle saved")
        }catch (err){
            resp.status(500).send(err)
            console.log(err)
        }
    }
    async deleteVehicle(req:any,resp:any){
        const id =req.query['id']
        try{
            await deleteVehicle(id)
            resp.status(200).json("Vehicle deleted...")
        }catch (err){
            resp.status(500).send(err)
            console.log(err)
        }
    }
    async updateVehicle(req:any,resp:any){
        const id =req.query['id']
        const vehicle =req.body
        try{
            await updateVehicle(id,vehicle)
            resp.status(200).json("Vehicle deleted...")
        }catch (err){
            resp.status(500).send(err)
            console.log(err)
        }
    }
    async getAllVehicles(req:any,resp:any){
        try{
            const all =await getAllVehicles();
        }catch (err){
            resp.status(500).send(err)
            console.log(err)
        }
    }
}
export default VehicleController