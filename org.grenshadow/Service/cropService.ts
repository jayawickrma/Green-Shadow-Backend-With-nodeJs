import {CropDTO} from "../DTO/CropDTO";
import {PrismaClient}from '@prisma/client'
import e from "express";
const prisma =new PrismaClient();
export async function saveCrop(c:CropDTO){
    try{
        const newCrop=await prisma.crop.create({
            data:{
                cropName:c.cropName,
                scientificName:c.scientificName,
                category:c.category,
                season:c.season,
                cropImage:c.cropImage
            }
        })
        console.log("crop added successfully")
    }catch (err){
        console.log("something went wrong when adding crop"+err);
    }
}
export async function deleteCrop(cropCode:number){
    try{
        await  prisma.crop.delete({
            where:{cropCode:cropCode}
        })
        console.log("crop deleted successfully!!")
    }catch (err){
        console.log('Something went wrong'+err)
    }
}
export async function UpdateCrop(id:number,c:CropDTO){
    try{
        await prisma.crop.update({
            where:{ cropCode :id},
            data: {
                cropName:c.cropName,
                scientificName:c.scientificName,
                category:c.category,
                season:c.season,
                cropImage:c.cropImage
            }
        })
    }catch (err){
        console.log('something went wrong!!!'+err)
    }
}
export async function getAllCrops(){
    try{
        await prisma.crop.findMany();
    }catch (err){
        console.log("something went wrong"+err)
    }
}