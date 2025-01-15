import express from "express";
import {CropDTO} from "../DTO/CropDTO";
import {saveCrop, UpdateCrop} from "../Service/cropService";
import e from "express";

const router=express.Router();

router.post('/addCrop',async (req, res) => {
    const cropDto: CropDTO = req.body;
    try {
        const addCustomer = await saveCrop(cropDto);
        res.send("crop saved successfully")
    } catch (err) {
        console.log("something went wrong when save the crop")
    }
})

router.put('/updateCrop/:id',async (req, res)=>{
    const id:number =+ req.params.id;
    const crop:CropDTO =req.body;
    try{
        await UpdateCrop(id,crop);
        res.send("crop "+id+" Updated Successfully...")
    }catch (err){
        console.log("something went wrong when updating.."+err)
    }
})
export default router;