export class SocialIcon{
    iconClassName : string;
    link : string;
    constructor(path : string, link : string){
        this.iconClassName = path;
        this.link = link;
    }
}