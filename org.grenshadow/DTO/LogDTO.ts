export class LogDTO {
    logCode: string;
    date: string;
    logDetails: string;
    observedImage: string;

    constructor(
        logCode: string,
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
