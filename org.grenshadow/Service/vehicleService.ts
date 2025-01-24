import prisma from "../../prisma/Client";
import {VehicleDTO} from "../DTO/VehicleDTO";

export async function addVehicle(vehicleDto:VehicleDTO){}
export async function getAllVehicles(){
    try{
        const all =await prisma.vehicle.findMany()
            if (all){
                return all
            }
    }catch (err){
        console.log(err)
        throw new Error("failed to load vehicle data...")
    }
}
export async function updateVehicle(id:number,vehicleDto:VehicleDTO){}
export async function deleteVehicle(id:number){
    try{
      await prisma.vehicle.delete({
            where:{vehicleCode:id}
        })
    }catch (err){
        console.log(err)
        throw new Error('failed to delete..')
    }
}