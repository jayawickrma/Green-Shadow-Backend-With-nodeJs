import express from 'express'
import {fieldDTO} from "../DTO/FieldDTo";
import {addField, deleteField} from "../Service/fieldService";
const router =express.Router();

router.post('/addField',async (req, res)=>{
    const fieldDto:fieldDTO =req.body
    try{
        await addField(fieldDto);
        console.log('successful')
    }catch (err){
        console.log(err)
        throw new Error("Something went wrong..")
    }
})

router.delete('/deleteField:id',async (req,res)=>{
    const id =req.params.id;
    try{
        await deleteField(id)
        res.send("successfully deleted")
    }catch (err){
        console.log(err)
        throw new Error("Something went wrong")
    }
})