import { Component, OnInit } from '@angular/core';
import { Course } from '../Models/Course';
import { CourseService } from '../Services/Course/course.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {


  title = ""
  Doctor = ""
  TA = ""
  year= ""
  lec = ["Lec 1"]
  labs = ["Lab 1"]

  constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
  }

  addCourse(): void {
    let s = new Course(this.title, this.Doctor, this.TA, this.year, this.lec, this.labs);
    const courseObservable = this.CourseService.addCourse(s);
    courseObservable.subscribe(()=>{
      this.title = ""
      this.Doctor = ""
      this.TA = ""
      this.year= ""
      alert("Successfully Created Course !")
    })
   
  }

}
