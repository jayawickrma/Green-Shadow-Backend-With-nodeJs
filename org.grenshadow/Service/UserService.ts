import prisma from "../../prisma/Client";
import {UserDTO} from "../DTO/UserDTO";

export async function createUser(user: UserDTO, email: any, bcryptPw: any){}
export async function findByEmail(email){}