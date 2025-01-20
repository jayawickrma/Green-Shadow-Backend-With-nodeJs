import express from 'express'
import {fieldDTO} from "../DTO/FieldDTo";
import {addField, deleteField, getAllFields, updateField} from "../Service/fieldService";
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

router.get('/getAllFields',async (req,res)=>{
    try{
        const fields=await getAllFields();
        res.send(fields)
    }catch (err){
        console.log(err)
        throw new Error("Something went wrong")
    }
})

router.put('/updateField:id',async (req,res)=>{
    const id = req.params.id
    const fdto:fieldDTO =req.body
    try{
        await updateField(id,fdto)
        res.send('Update Successful...')
    }catch (err){
        console.log(err)
        throw new Error("Something went wrong")
    }
})