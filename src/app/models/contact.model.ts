
export class Contact {
    sender: string;
    email: string;
    message: string;
    reciever: string;

    constructor(sender: string, email: string, msg: string, reciever: string){
        this.sender = sender;
        this.email = email;
        this.message = msg;
        this.reciever = reciever;
    }
}
