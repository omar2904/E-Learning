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
/*  lec = [{
    name: 'lecture 1',
    path: 'https://drive.google.com/file/d/17bB4F-bZlSPAA3wDdf56u9v7D746_OFp/view?usp=sharing'
  }]
  labs = [{
    name: 'lab 1',
    path: 'ay habal'
  }]
*/
  constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
  }

  addCourse(): void {
    let s = new Course(this.title, this.Doctor, this.TA, this.year);
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
