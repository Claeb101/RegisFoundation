export class TeamMember {
    image_path : string;
    description : string;
    name : string;
    role : string;

    constructor(image_path:string, description:string, name:string, role:string){
        this.image_path = image_path;
        this.description = description;
        this.name = name;
        this.role = role;
    }
}