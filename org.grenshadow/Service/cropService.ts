import {CropDTO} from "../DTO/CropDTO";
import {PrismaClient}from '@prisma/client'
import e from "express";
const prisma =new PrismaClient();
export async function saveCrop(c:CropDTO){
    try{
        await prisma.crop.create({
            data:{
                cropName:c.cropName,
                scientificName:c.scientificName,
                category:c.category,
                season:c.season,
                cropImage:c.cropImage
            }
        })

    }catch (err){
        console.log('failed to save crop '+err)
        throw new Error('Failed to save crop')
    }
}

export async function deleteCrop(id:number){
    try{
        await prisma.crop.delete({
                where:{cropCode:id},

        })
        console.log('Crop deleted successfully !!!')

    }catch (err){
        console.log('failed to delete Crop' +err)
        throw new Error('Failed to delete Crop')
    }
}
export async function getAllCrops(){
        try{
            const getAll =await prisma.crop.findMany()
                if (getAll){
                    return "Successfully loaded data .."
                }
        }catch (err){
            console.log('failed to load data '+err)
            throw new Error('Failed to load data')
        }
}
export async function updateCrop(id:string,c:CropDTO){
        try{

        }catch (err){
            console.log('Something went wrong ' +err)
            throw new Error('Something went wrong when updating crop')
        }
}