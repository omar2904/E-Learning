import { GlobalVariable } from "./GlobalVariable";

export class Course{


    id: String = "";
    name: String = "";
    dr: String = "";
    ta: String = "";
    lectures = [];
    labs = [];
    year: String = "";

    constructor(name:String, dr: String, ta: String, year: String){
        this.dr = dr
        this.ta = ta
        this.name = name
        this.year = year
        this.id = GlobalVariable.idCourseGenerator.toString()
        GlobalVariable.idCourseGenerator = GlobalVariable.idCourseGenerator + 1;
    }
}