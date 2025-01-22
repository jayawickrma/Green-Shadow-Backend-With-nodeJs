import {fieldDTO} from "./FieldDTo";
import {LogDTO} from "./LogDTO";

export interface StaffDTO {
    memberCode: number;
    firstName: string;
    lastName: string;
    joinedDate: string;
    dateOfBirth: string;
    gender: string;
    designation: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    addressLine5: string;
    contactNo: string;
    email: string;
    role: string;
    fieldList:fieldDTO[],
    logList:LogDTO[]
}
