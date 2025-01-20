export class VehicleDTO {
    vehicleCode: string;
    licensePlateNumber: string;
    name: string;
    category: string;
    fuelType: string;
    remark: string;
    status: string;
    staffId?: string;

    constructor(
        vehicleCode: string,
        licensePlateNumber: string,
        name: string,
        category: string,
        fuelType: string,
        remark: string,
        status: string,
        staffId?: string
    ) {
        this.vehicleCode = vehicleCode;
        this.licensePlateNumber = licensePlateNumber;
        this.name = name;
        this.category = category;
        this.fuelType = fuelType;
        this.remark = remark;
        this.status = status;
        this.staffId = staffId;
    }
}
