import express from "express";
import {CropDTO} from "../DTO/CropDTO";
import {deleteCrop, getAllCrops, saveCrop, UpdateCrop} from "../Service/cropService";
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

router.delete('/deleteCrop/:id',async (req, res)=>{
    const id:number =+ req.params.id;
    try{
        await deleteCrop(id);
        res.send("crop "+id+ " deleted successfully")
    }catch (err){
        console.log('something went wrong when deleting...'+err)
    }
})
router.get('/getAll',async (req, res)=>{
    try{
        const crops =await getAllCrops();
        res.json(crops)
    }catch (err){
        console.log("Couldn't get crop list")
    }
})
export default router;