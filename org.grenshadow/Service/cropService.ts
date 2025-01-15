import {CropDTO} from "../DTO/CropDTO";
import {PrismaClient}from '@prisma/client'
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
        console.log("something went wrong when adding crop");
    }
}