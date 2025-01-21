export class EquipmentDTO {
    equipmentCode: number;
    name: string;
    type: string;
    status: string;
    availableCount: number;

    constructor(
        equipmentCode: number,
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
