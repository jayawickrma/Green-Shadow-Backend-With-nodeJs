import prisma from "../../prisma/Client";
import {UserDTO} from "../DTO/UserDTO";
import bcrypt from 'bcrypt'

export async function createUser(user:UserDTO){
    const hashedPw =await bcrypt.hash(user.password,10)
    try{
        await prisma.user.create({
            data:{
                email:user.email,
                password:hashedPw,
                createdAt:new Date(),
                updatedAt :new Date()

            }
        })
    }catch (err){
        console.log(err)
    }
}
// @ts-ignore
export async function findByEmail(verifyUser: UserDTO){
    try{
       const already=await prisma.user.findUnique({
            where:{
                email:verifyUser.email,
            },
        })
        if (already){
            return "User Already exit..."
        }
    }catch (err){
        console.log(err)
    }
}