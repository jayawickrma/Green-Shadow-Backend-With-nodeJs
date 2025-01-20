export class EquipmentDTO {
    equipmentCode: string;
    name: string;
    type: string;
    status: string;
    availableCount: number;

    constructor(
        equipmentCode: string,
        name: string,
        type: string,
        status: string,
        availableCount: number
    ) {
        this.equipmentCode = equipmentCode;
        this.name = name;
        this.type = type;
        this.status = status;
        this.availableCount = availableCount;
    }
}
