import {PrismaClient} from '@prisma/client'
import {fieldDTO} from "../DTO/FieldDTo";


const prisma =new PrismaClient();

export async function addField(f:fieldDTO){
    try{
        await prisma.field.create({
            data:{
                fieldCode:f.fieldCode,
                name:f.name,
                location:f.location,
                extentSize:f.extentSize,
                fieldImage1:f.fieldImage1,
                fieldImage2:f.fieldImage2
            }
        })
        console.log('field saved successfully')
    }catch (err){
        console.log('something went wrong when save field')
        throw new Error('Something went wrong when save field')
    }
}
export async function  deleteField(id:string){
    try{
        await prisma.field.delete({
            where:{fieldCode:id}
        })
        console.log('Log deleted Successfully')
    }catch (err){
        console.log('something went wrong' +err)
        throw new Error('Something went wrong when deleting')
    }
}
export async function  updateField (id:string ,f:fieldDTO){
    try{
        await prisma.field.update({
            where:{fieldCode:id},
            data:{
                name:f.name,
                location:f.location,
                extentSize:f.extentSize,
                fieldImage1:f.fieldImage1,
                fieldImage2:f.fieldImage2
            }
        })
    }catch (err){
        console.log('something went wrong '+err)
        throw new Error("something went wrong")
    }
}
export async function getAllFields(){
    try{
        await prisma.field.findMany()
    }catch (err){
        console.log('couldnt load data '+err)
        throw new Error('something went wrong')
    }
}