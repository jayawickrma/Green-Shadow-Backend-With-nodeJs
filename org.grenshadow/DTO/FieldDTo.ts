import {StaffDTO} from "./StaffDTO";
import {LogDTO} from "./LogDTO";
import {CropDTO} from "./CropDTO";

export interface fieldDTO {
    fieldCode: number;
    name: string;
    location: string;
    extentSize: number;
    fieldImage1: string;
    fieldImage2: string;
    staffList:string[];
    logList:string[];
    cropList:string[]

}
