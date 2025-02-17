import {LogDTO} from "./LogDTO";
import {fieldDTO} from "./FieldDTo";

export interface CropDTO {
    cropCode: number;
    cropName: string;
    scientificName: string;
    category: string;
    season: string;
    cropImage: string;
    logList:string[];
    fieldList:string[]
}
