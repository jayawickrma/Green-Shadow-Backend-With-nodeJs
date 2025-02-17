import {UserDTO} from "../DTO/UserDTO";
import {createUser, findByEmail} from "../Service/UserService";
import jwt, {Secret} from "jsonwebtoken";

class UserController {
        async signIn(req:any,resp:any){
            const email =req.body.email;
            const password =req.body.password;

            console.log(email,password)

            const user:UserDTO ={email,password}

            try{
                const verified =await findByEmail(user);

                if (verified){
                    const token =jwt.sign({email},process.env.SECRET_KEY as Secret,{expiresIn:"30m"});
                    const refreshToken =jwt.sign({email},process.env.REFRESH_TOKEN as Secret,{expiresIn:"7d"});
                    resp.json({accessToken:token,refreshToken:refreshToken});
                }else {
                    resp.sendStatus(403).send("Invalid Credentials...")
                }

            }catch (err){
                console.log(err)
                resp.status(400).send(err)
            }
        }
        async signUp(req:any,resp:any){
            const user =req.body
            try{
                await createUser(user);
                resp.status(201).json("Created new user :",user)
            }catch (err){
                resp.status(401).send('UnAuthorized user and cant log into the System ..')
            }
        }
        async refreshToken(req:any,resp:any){
            const authHeader =req.headers.authorization;
            const refresh_token =authHeader?.split(' ')[1];

            if (!refresh_token)resp.status(401).send('No Token Provided...')

            try{

            }catch (err){
                console.log(err);
                resp.status(401).json(err);
            }
        }
}
export default UserController