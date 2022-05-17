export class Student{

    private static idGenerator: number = 12545151
    
    key: String = ''
    email: String = "";
    password: String = "";
    name: String = "";
    year: String = "";
    pending: boolean = true;
    department: String = "";
    id: String = "";
    courses =[{}]
    constructor(email: String, password: String,name: String,department: String,year: String, pending = true){
        this.email = email
        this.password = password
        this.name = name
        this.department = department
        this.year = year
        this.id = Student.idGenerator.toString()
        this.pending = pending
        Student.idGenerator++
    }

    addCourse(courseid: any){
        let newCourses = [{...this.courses}]
        newCourses.push(courseid)
        this.courses = {...newCourses};
    }
}