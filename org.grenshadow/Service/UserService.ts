import prisma from "../../prisma/Client";

export async function createUser(username: any, bcryptPw: any){
    try{

        await prisma.user.create({
            data:{
                // @ts-ignore
                username,bcryptPw,
            }
        })
    }catch (err){
        console.log(err)
    }
}
// @ts-ignore
export async function findByEmail(email){}