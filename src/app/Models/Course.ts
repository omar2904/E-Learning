import { GlobalVariable } from "./GlobalVariable";

export class Course{

    key: String = ''
    id: String = "";
    name: String = "";
    dr: String = "";
    ta: String = "";
    lectures = [
        {
            name: '',
            path: ''
        }
    ];
    labs = [
        {
            name: '',
            path: ''
        }
    ];
    year: String = "";

    constructor(name:String, dr: String, ta: String, year: String, lec:any, labs:any){
        this.dr = dr
        this.ta = ta
        this.name = name
        this.year = year
        this.lectures = lec
        this.labs = labs
        this.id = GlobalVariable.idCourseGenerator.toString()
        GlobalVariable.idCourseGenerator = GlobalVariable.idCourseGenerator + 1;
    }
}