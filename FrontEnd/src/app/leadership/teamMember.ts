export class TeamMember {
    image_path : string;
    description : string;
    name : string;
    role : string;

    isRevealed : boolean;

    constructor(image_path:string, description:string, name:string, role:string, reveal:boolean){
        this.image_path = image_path;
        this.description = description;
        this.name = name;
        this.role = role;
        this.isRevealed = false;
    }
}