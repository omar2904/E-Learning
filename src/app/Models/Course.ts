import { GlobalVariable } from "./GlobalVariable";

export class Course{

    key: String = ''
    id: String = "";
    name: String = "";
    dr: String = "";
    ta: String = "";
    lectures = [
        {
            name: 'Lecture 1',
            path: 'https://drive.google.com/file/d/14ox3J66RcKLdQE9n05UuRYuGqctt3E90/view?usp=sharing'
        }
    ];
    labs = [
        {
            name: 'Lab 1',
            path: 'https://drive.google.com/file/d/14ox3J66RcKLdQE9n05UuRYuGqctt3E90/view?usp=sharing'
        }
    ];
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