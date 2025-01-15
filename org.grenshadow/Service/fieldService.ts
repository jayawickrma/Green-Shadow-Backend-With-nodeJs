import {PrismaClient} from '@prisma/client'
import {fieldDto} from "../DTO/FieldDTo";

const prisma =new PrismaClient();
export async function saveField(f:fieldDto){
    const newField =await prisma.field.create({
        data:{
            fieldCode:f.fieldCode,
            name:f.name,
            location:f.location,
            extentSize:f.extentSize,
            fieldImage1:f.fieldImage1,
            fieldImage2:f.fieldImage2
        }
    })
    console.log('field saved successfully');
}
