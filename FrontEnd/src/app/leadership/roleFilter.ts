export class RoleFilterButton {
    filter: string;
    displayName: string;
    id: string;

    constructor(filter: string, displayName: string, id: string){
        this.filter = filter;
        this.displayName = displayName;
        this.id = id;
    }
}