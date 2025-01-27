import {UserDTO} from "../DTO/UserDTO";
import {createUser, findByEmail} from "../Service/UserService";

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserRegisterDto = require('../dtos/UserRegisterDto');
const UserLoginDto = require('../dtos/UserLoginDto');
const userService = require('../services/userService');

class UserController{
    async signUp(req:any,resp:any){
        const {username,email,password} =req.body
        try{
            const bcryptPw =await bcrypt.hash(password,10)
            const saveUser =await createUser(username,email,bcryptPw)
            resp.status(201).json({ message: 'User registered successfully!', saveUser });
        }catch (err){
            resp.json(err)
        }
    }
    async signIn(req:any,resp:any){
        const {email,password} =req.body
        const userLoginDto = new UserLoginDto(email, password);
        try{
            const findUser =await findByEmail(userLoginDto.email)
            // @ts-ignore
            if (!findUser){
                return resp.status(404).json({ error: 'User not found!' });
            }

            // @ts-ignore
            const isPasswordValid = await bcrypt.compare(userLoginDto.password, findUser.password);
            if (!isPasswordValid) {
                return resp.status(401).json({ error: 'Invalid password!' });
            }
            // @ts-ignore
            const token = jwt.sign({ username: findUser.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

            resp.json({ message: 'Login successful!', token });

        }catch (err){

        }
    }
}
export default UserController;