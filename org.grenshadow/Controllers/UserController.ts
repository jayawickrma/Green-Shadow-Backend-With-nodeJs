import {createUser, findByEmail} from "../Service/UserService";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {UserDTO} from '../DTO/UserDTO'


class UserController{
    async signUp(req:any,resp:any){
        const {email,password} =req.body
        try{
            const alreadyExit =await findByEmail(email)
            // @ts-ignore
            if (alreadyExit){
                return resp.status(400).json({ message: 'Email is already in use!' });
            }

            const bcryptPw =await bcrypt.hash(password,10)
            const saveUser =await createUser(email,bcryptPw)
            resp.status(201).json({ message: 'User registered successfully!'+saveUser});
        }catch (err){
            resp.json(err)
        }
    }
    async signIn(req:any,resp:any){
        const user =req.body
        try{
            const findUser =await findByEmail(user.email)
            // @ts-ignore
            if (! findUser){
                return resp.status(404).json({ error: 'User not found!' });
            }

            // @ts-ignore
            const isPasswordValid = await bcrypt.compare(req.password, findUser.password);
            if (!isPasswordValid) {
                return resp.status(401).json({ error: 'Invalid password!' });
            }
            // @ts-ignore
            const token = jwt.sign({ username: findUser.email}, process.env.JWT_SECRET, { expiresIn: '1h' });

            resp.json({ message: 'Signed In successful!', token });

        }catch (err){
        }
    }
}
export default UserController;