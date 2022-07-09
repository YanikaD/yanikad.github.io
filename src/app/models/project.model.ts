import {Skills} from './skills.model';

export class Project {
    proj_name: string;
    proj_detail: string;
    proj_img: string;
    skills: Skills[];
    isFlip: boolean;

    constructor(name: string, detail: string,image : string, skills: Skills[]){
        this.proj_name = name;
        this.proj_detail = detail;
        this.proj_img = image;
        this.skills = skills;
        this.isFlip = false;
    }
}
