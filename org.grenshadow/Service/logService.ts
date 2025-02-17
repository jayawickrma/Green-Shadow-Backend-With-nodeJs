import prisma from "../../prisma/Client";
import {LogDTO} from "../DTO/LogDTO";

export async function saveLog(l:LogDTO){
    try{
        await prisma.log.create({
            data:{
                date:l.date,
                logDetails:l.logDetails,
                observedImage:l.observedImage,
                LogCropDetails:{
                    create:l.cropList.map((crop)=>({cropCode:crop}))
                },
                LogFieldsDetails:{
                    create:l.fieldList.map((field)=>({fieldCode:field}))
                },
                LogStaffDetails:{
                    create:l.staffList.map((staff)=>({memberCode:staff}))
                }
            }
        })
    }catch (err){
        console.log(err)
    }
}

export async function deleteLog(id:number){
    try{
        await prisma.log.delete({
            where:{logCode:id}
        })
    }catch (err){
        console.log(err)
    }
}
export async function getAllLogs(){
    try{
        const getAll =await prisma.log.findMany()
            if (getAll){
                return getAll
            }else {
                console.log('cant load data ..')
            }
    }catch (err){
        console.log(err)
    }
}

export async function updateLog(id:number,l:LogDTO){
    try{
        await prisma.log.update({
            where:{logCode:id},
            data:{
                date:l.date,
                logDetails:l.logDetails,
                observedImage:l.observedImage,
                LogCropDetails:{
                    create:l.cropList.map((crop)=>({cropCode:crop}))
                },
                LogFieldsDetails:{
                    create:l.fieldList.map((field)=>({fieldCode:field}))
                },
                LogStaffDetails:{
                    create:l.staffList.map((staff)=>({memberCode:staff}))
                }
            }
        })
    }catch (err){
        console.log(err)
    }
}