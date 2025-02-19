import {EquipmentDTO} from "../DTO/EquipmentDTO";
import prisma from "../../prisma/Client";

export async function saveEqu(e:EquipmentDTO){
    try{
        await prisma.equipment.create({
            data:{
                name:e.name,
                type:e.type,
                status:e.status,
                availableCount:e.availableCount,
              EquipmentFieldDetails:{
                    create:e.fieldList.map((field)=>({fieldCode:field}))
              }
            }
        })
    }catch (err){
        console.log(err)
        throw new Error("something went wrong.")
    }
}

export async function deleteEqu(id:number){
    try{
        await prisma.equipment.delete({
            where:{equipmentCode:id}
        })
    }catch (err){
        console.log(err)
        throw new Error("something went wrong.")
    }
}
export async function getAllEqu(){
    try{
        await prisma.equipment.findMany({
            include: {
                EquipmentFieldDetails: {
                    select: {
                        fieldCode: true
                    }
                },
                EquipmentStaffDetails: {
                    select: {
                        staffId: true
                    }
                }
            }
        });
    }catch (err){
        console.log(err)
        throw new Error("something went wrong.")
    }
}
export async function updateEqu(id:number,equipment:EquipmentDTO){
    try{
        await prisma.equipment.update({
            where:{equipmentCode:id},
            data:{
                name:equipment.name,
                type:equipment.type,
                status:equipment.status,
                availableCount:equipment.availableCount,
                EquipmentFieldDetails:{
                    create:equipment.fieldList.map((field)=>({fieldCode:field}))
                }
            }
        })
    }catch (err){
        console.log(err)
        throw new Error("something went wrong.")
    }
}