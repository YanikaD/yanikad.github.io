export class Profile {
    username: string;
    profile_img: string;
    position: string;
    github: string;
    linkedin: string;
    resume: string;
    about_me: string;

    constructor(name: string, image: string, pos: string, git: string, linkedin: string, resume: string, about: string) {
        this.username = name;
        this.profile_img = image;
        this.position = pos;
        this.github = git;
        this.linkedin = linkedin;
        this.resume = resume;
        this.about_me = about;
    }
}
