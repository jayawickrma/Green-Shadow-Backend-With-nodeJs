export class CropDTO {
    cropCode: number;
    cropName: string;
    scientificName: string;
    category: string;
    season: string;
    cropImage: string;

    constructor(
        cropCode: number,
        cropName: string,
        scientificName: string,
        category: string,
        season: string,
        cropImage: string
    ) {
        this.cropCode = cropCode;
        this.cropName = cropName;
        this.scientificName = scientificName;
        this.category = category;
        this.season = season;
        this.cropImage = cropImage;
    }
}
