import { Component, OnInit } from '@angular/core';
import { Course } from '../Models/Course';
import { GlobalVariable } from '../Models/GlobalVariable';
import { Student } from '../Models/Student';
import { CourseService } from '../Services/Course/course.service';
import { StudentService } from '../Services/student/student.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  students: any;
  selected = [];
  courseId: any;
  title = ""
  Doctor = ""
  TA = ""
  year= ""

  lec = [{
    name: 'lecture 1',
    path: 'https://drive.google.com/file/d/17bB4F-bZlSPAA3wDdf56u9v7D746_OFp/view?usp=sharing'
  }]
  labs = [{
    name: 'lab 1',
    path: 'ay habal'
  }]

  constructor(private CourseService: CourseService, private studentService:StudentService) { }

  ngOnInit(): void {
    const studentsObservable = this.studentService.getStudents();
    studentsObservable.subscribe((data: any) => {
      const t = data
      GlobalVariable.students = Object.values(t)
      GlobalVariable.students.key = Object.keys(t)
      this.students = GlobalVariable.students
      console.log(this.students)
    });
  }

  addCourse(): void {

    let s = new Course(this.title, this.Doctor, this.TA, this.year);

    const courseObservable = this.CourseService.addCourse(s);

    courseObservable.subscribe((data)=>{
      this.courseId = Object.values(data)[0]
      for (let i = 0, j = 0; i < this.students.length; i++) {
        if(this.students[i].id==this.selected[j]['id']){
          let s = new Student(this.students[i]['email'], this.students[i]['password'], this.students[i]['name'],
          this.students[i]['department'], this.students[i]['year'],this.students[i]['pending']);
          s.addCourse(this.courseId)
          const studentsObservable = this.studentService.updateStudent(GlobalVariable.students.key[i], s)
          studentsObservable.subscribe(()=>{
        });
          j++
        }
        
      }
      
      
      this.title = ""
      this.Doctor = ""
      this.TA = ""
      this.year= ""
      alert("Successfully Created Course !")
    })
   
  }

}
