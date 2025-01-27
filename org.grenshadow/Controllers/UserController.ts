import {UserDTO} from "../DTO/UserDTO";
import {createUser} from "../Service/UserService";

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserRegisterDto = require('../dtos/UserRegisterDto');
const UserLoginDto = require('../dtos/UserLoginDto');
const userService = require('../services/userService');

class UserController{
    async signIn(req:any,resp:any){
        const {username,email,password} =req.body
        try{
            const bcryptPw =await bcrypt.hash(password,10)
            const saveUser =await createUser(username,email,bcryptPw)
            resp.status(201).json({ message: 'User registered successfully!', saveUser });
        }catch (err){
            resp.json(err)
        }
    }
    async signUp(req:any,resp:any){}
}
export default UserController;