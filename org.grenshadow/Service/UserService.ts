import prisma from "../../prisma/Client";
import {UserDTO} from "../DTO/UserDTO";

export async function createUser(user: UserDTO, email: any, bcryptPw: any){}
// @ts-ignore
export async function findByEmail(email){}