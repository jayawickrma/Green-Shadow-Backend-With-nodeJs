import {fieldDTO} from "./FieldDTo";

export interface EquipmentDTO {
    equipmentCode: number;
    name: string;
    type: string;
    status: string;
    availableCount: number;
    fieldList:fieldDTO[]
}
