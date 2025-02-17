import {StaffDTO} from "./StaffDTO";
import {CropDTO} from "./CropDTO";
import {fieldDTO} from "./FieldDTo";

export interface LogDTO {
    logCode: number;
    date: string;
    logDetails: string;
    observedImage: string;
    staffList:number[],
    fieldList:number[],
    cropList:number[]
}
