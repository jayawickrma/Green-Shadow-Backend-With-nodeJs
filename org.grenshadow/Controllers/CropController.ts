import express from "express";
import {CropDTO} from "../DTO/CropDTO";
import {deleteCrop, getAllCrops, saveCrop, updateCrop} from "../Service/cropService";

const router =express.Router();


router.post('/addCrop',async (req, res) => {
    const cropDto:CropDTO =req.body;
    try{
        await saveCrop(cropDto)
        res.send('crop Saved Successfully')
    }catch (err){
        console.log(err)
        throw new Error("Something went wrong.")
    }
})

router.delete('/deleteCrop:id',async (req, res) => {
    const cropCode:number =+ req.params.id;
    try{
        await deleteCrop(cropCode);
        res.send('the crop '+cropCode+ ' deleted successfully')
    }catch (err){
        console.log(err)
        throw new Error("couldn't delete..")
    }
})

router.put('/updateCrop:id',async (req, res)=>{
   const id =req.params.id;
   const crop:CropDTO =req.body;
    try{
        await updateCrop(id,crop)
        res.send('Update Successful...')
        }catch (err){
        console.log(err)
        throw new Error("Something went wrong")
    }
})
router.get('/getAllCrops',async(req,res)=>{
    try{
        const crops =await getAllCrops();
        res.send(crops);
    }catch (err){
        console.log(err)
        throw new Error("cant load data")
    }
})