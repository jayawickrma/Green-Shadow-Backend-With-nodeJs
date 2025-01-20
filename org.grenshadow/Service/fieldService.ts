import {PrismaClient} from '@prisma/client'
import {fieldDTO} from "../DTO/FieldDTo";


const prisma =new PrismaClient();
export async function saveField(f:fieldDTO){
    const newField =await prisma.field.create({
        data:{
            name:f.name,
            location:f.location,
            extentSize:f.extentSize,
            fieldImage1:f.fieldImage1,
            fieldImage2:f.fieldImage2
        }
    })
    console.log('field saved successfully');
}

export async function deleteField(fieldCode:number){
    try{
        await prisma.field.delete({
            where:{fieldCode:fieldCode}
        })
        console.log('field deleted successfully!!!')

    }catch (err){
        console.log('something went wrong...'+err)
    }
}
export async function UpdateField(fieldCode:number,f:fieldDto){
    try{
        await prisma.field.update({
            where :{fieldCode :fieldCode},
            data:{
                name:f.name,
                location:f.location,
                extentSize:f.extentSize,
                fieldImage1:f.fieldImage1,
                fieldImage2:f.fieldImage2
            }

        })
    }catch (err){
        console.log('something went wrong when update this ....')
    }
}
export async  function getAllFields(){
    try{
        await prisma.field.findMany();
    }catch (err){
        console.log("couldn't load fields  .."+err)
    }
}