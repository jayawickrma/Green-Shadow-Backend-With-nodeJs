export class fieldDTO {
    fieldCode: number;
    name: string;
    location: string;
    extentSize: number;
    fieldImage1: string;
    fieldImage2: string;

    constructor(
        fieldCode: number,
        name: string,
        location: string,
        extentSize: number,
        fieldImage1: string,
        fieldImage2: string
    ) {
        this.fieldCode = fieldCode;
        this.name = name;
        this.location = location;
        this.extentSize = extentSize;
        this.fieldImage1 = fieldImage1;
        this.fieldImage2 = fieldImage2;
    }
}
