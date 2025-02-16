import {CropDTO} from "../DTO/CropDTO";
import prisma from "../../prisma/Client";
export async function saveCrop(c: CropDTO,image:string) {
    console.log(c.fieldList,c.logList)

    if (!image){
        throw new Error("Image is required.")
    }
    try {
        await prisma.crop.create({
            data: {
                cropName: c.cropName,
                scientificName: c.scientificName,
                category: c.category,
                season: c.season,
                cropImage: image,
                logList: {
                    connect: c.logList.map((log) => ({ logCode: log.logCode }))  },

                fieldList: {
                    connect: c.fieldList.map((field) => ({ fieldCode: field.fieldCode })) }
            },
            include: {
                logList: true,
                fieldList: true,
            },
        });
    } catch (err) {
        console.log('Failed to save crop:', err);
        throw new Error('Failed to save crop');
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
                    return getAll
                }
        }catch (err){
            console.log('failed to load data '+err)
            throw new Error('Failed to load data')
        }
}
export async function updateCrop(id:number,c:CropDTO) {
        try {
            await prisma.crop.update({
                where: {
                    cropCode: id
                },
                data: {
                    cropName: c.cropName,
                    scientificName: c.scientificName,
                    category: c.category,
                    season: c.season,
                    cropImage: c.cropImage
                }
            })
        } catch (err) {
            console.log('Something went wrong ' + err)
            throw new Error('Something went wrong when updating crop')
        }
}