export class timeEvent {
    date: string;
    description: string;
    img_path: string;

    constructor(date: string, img_path: string, description: string){
        this.date = date;
        this.description = description;
        this.img_path = img_path;
    }
}
