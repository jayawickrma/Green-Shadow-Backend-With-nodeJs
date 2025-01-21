export class LogDTO {
    logCode: number;
    date: string;
    logDetails: string;
    observedImage: string;

    constructor(
        logCode: number,
        date: string,
        logDetails: string,
        observedImage: string
    ) {
        this.logCode = logCode;
        this.date = date;
        this.logDetails = logDetails;
        this.observedImage = observedImage;
    }
}
