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
        await prisma.user.findUnique({
            where:{email},
        })
    }catch (err){
        console.log(err)
    }
}