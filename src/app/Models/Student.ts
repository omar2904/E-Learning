export class Student{
    email: String = "";
    password: String = "";
    fname: String = "";
    lname: String = "";
    year: String = "";
    pending: boolean = true;
    courses = [{
        id:  "",
        grades: {},
    }]
    constructor(email: String, password: String,fname: String,lname: String,year: String){
        this.email = email
        this.password = password
        this.fname = fname
        this.lname = lname
        this.year = year
    }
}