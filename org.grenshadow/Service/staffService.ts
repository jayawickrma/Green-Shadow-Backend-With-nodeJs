import prisma from "../../prisma/Client";
import {StaffDTO} from "../DTO/StaffDTO";

export async function saveMember(s:StaffDTO){
    try{
        const save=await prisma.staff.create({
            data:{
                firstName:s.firstName,
                lastName:s.lastName,
                joinedDate:s.joinedDate,
                dateOfBirth:s.dateOfBirth,
                gender:s.gender,
                designation:s.designation,
                addressLine1:s.addressLine1,
                addressLine2:s.addressLine2,
                addressLine3:s.addressLine3,
                addressLine4:s.addressLine4,
                addressLine5:s.addressLine5,
                contactNo:s.contactNo,
                email:s.email,
                role:s.role,
                logList:{
                    connect:s.logList.map((log)=>({logCode:log.logCode}))
                },
                fieldList:{
                    connect:s.fieldList.map((field)=>({fieldCode:field.fieldCode}))
                }
            }

        })
    }catch (err){
        console.log(err)
    }
}

export async function deleteStaff(id:number){
    try{
        await prisma.staff.delete({
            where:{memberCode:id}
        })
        console.log("the user id "+id+" successfully deleted...")
    }catch (err){
        console.log(err)
    }
}

export async function getAllStaff(){
    try{
        const getAll=await prisma.staff.findMany()
            if (getAll){
                return getAll;
            }
    }catch (err){
        console.log(err)
    }
}
export async function updateStaff(id:number,s:StaffDTO){
    try{
        await prisma.staff.update({
            where:{memberCode:id},
            data:{
                firstName:s.firstName,
                lastName:s.lastName,
                joinedDate:s.joinedDate,
                dateOfBirth:s.dateOfBirth,
                gender:s.gender,
                designation:s.designation,
                addressLine1:s.addressLine1,
                addressLine2:s.addressLine2,
                addressLine3:s.addressLine3,
                addressLine4:s.addressLine4,
                addressLine5:s.addressLine5,
                contactNo:s.contactNo,
                email:s.email,
                role:s.role,
                logList:{
                    connect:s.logList.map((log)=>({logCode:log.logCode}))
                },
                fieldList:{
                    connect:s.fieldList.map((field)=>({fieldCode:field.fieldCode}))
                }
            }
        })
    }catch (err){
        console.log(err)
    }
}