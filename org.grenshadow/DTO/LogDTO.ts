export interface LogDTO {
    logCode: number;
    date: string;
    logDetails: string;
    observedImage: string;
    staffList:number[],
    fieldList:number[],
    cropList:number[]
}
