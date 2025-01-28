import {createUser, findByEmail} from "../Service/UserService";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {UserDTO} from '../DTO/UserDTO'


class UserController {
    async signUp(req: any, resp: any) {
        const {email, password} = req.body
        try {
            const alreadyExit = await findByEmail(email)
            // @ts-ignore
            if (alreadyExit) {
                return resp.status(400).json({message: 'Email is already in use!'});
            }

            const bcryptPw = await bcrypt.hash(password, 10)
            const saveUser = await createUser(email, bcryptPw)
            resp.status(201).json({message: 'User registered successfully!'});
        } catch (err) {
            resp.json(err)
        }
    }

    async signIn(req: any, resp: any) {
        console.log(req.body)
        const { email, password } = req.body; // Extract email and password from request body

        try {
            // @ts-ignore
            const findUser = await findByEmail(email);
            if (!findUser) {
                return resp.status(404).json({ error: 'User not found!' });
            }

            // @ts-ignore
            if (!findUser.password) {
                return resp.status(500).json({ error: 'User password not found in database!' });
            }

            // @ts-ignore
            const isPasswordValid = await bcrypt.compare(password, findUser.password);
            if (!isPasswordValid) {
                return resp.status(401).json({ error: 'Invalid password!' });
            }


            const token = jwt.sign({ email: findUser }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });

            return resp.json({ message: 'Signed In successfully!', token });
        } catch (err) {
            console.error('Error during sign-in:', err);
            return resp.status(500).json({ error: 'An error occurred during sign-in.' });
        }
    }

}
export default UserController