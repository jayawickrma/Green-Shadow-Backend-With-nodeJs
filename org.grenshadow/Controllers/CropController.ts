import express from "express";
import {CropDTO} from "../DTO/CropDTO";
import {saveCrop} from "../Service/cropService";

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
export default router;