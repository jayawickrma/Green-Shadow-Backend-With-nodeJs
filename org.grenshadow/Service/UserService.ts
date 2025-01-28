import prisma from "../../prisma/Client";

export async function createUser(email: any, bcryptPw: any){
    try{

        await prisma.user.create({
            data:{
                // @ts-ignore
                email:email,
                password:bcryptPw,
            }
        })
    }catch (err){
        console.log(err)
    }
}
// @ts-ignore
export async function findByEmail(email){
    try{
       const already=await prisma.user.findUnique({
            where:{
                email:email,

            },
        })
        if (already){
            return "User Already exit..."
        }
    }catch (err){
        console.log(err)
    }
}