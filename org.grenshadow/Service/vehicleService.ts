import prisma from "../../prisma/Client";
import {VehicleDTO} from "../DTO/VehicleDTO";

export async function addVehicle(vehicleDto:VehicleDTO){
    try{
        await prisma.vehicle.create({
            data:{
                licensePlateNumber:vehicleDto.licensePlateNumber,
                name:vehicleDto.name,
                category:vehicleDto.category,
                fuelType:vehicleDto.fuelType,
                remark:vehicleDto.remark,
                status:vehicleDto.status,
                staff:{
                    connect:{
                        memberCode:vehicleDto.staffId
                    }

                }

            }
        })
    }catch (err){
        console.log(err)
        throw new Error("Something went wrong..")
    }
}
export async function getAllVehicles(){
    try{
        const all =await prisma.vehicle.findMany()
        console.log(all)
            return all

    }catch (err){
        console.log("seeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",err)
        throw new Error("failed to load vehicle data...")
    }
}
export async function updateVehicle(id:number,vehicleDto:VehicleDTO){
    try{
        await prisma.vehicle.update({
            where:{vehicleCode:id},
            data:{
                licensePlateNumber:vehicleDto.licensePlateNumber,
                name:vehicleDto.name,
                category:vehicleDto.category,
                fuelType:vehicleDto.fuelType,
                remark:vehicleDto.remark,
                status:vehicleDto.status,
                staff:{
                    connect:{
                        memberCode:vehicleDto.staffId
                    }

                }
            }
        })

    }catch (err){
        console.log(err)
        throw new Error("Something went wrong when updating...try again !!!")
    }
}
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