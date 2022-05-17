export class Announcement{
    text: String = "";
    announcer: String = "";
    date: String = "";

    constructor (text: String, announcer: String, date: String){
        this.text = text;
        this.announcer = announcer;
        this.date = date;
    }
}