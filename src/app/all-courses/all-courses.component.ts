import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariable } from '../Models/GlobalVariable';
import { CourseService } from '../Services/Course/course.service';


@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})

export class AllCoursesComponent implements OnInit {
  courses: any
  email = GlobalVariable.email

  constructor(private courseService: CourseService, public router: Router) {
    this.RetieveAllCourses()
  }

  ngOnInit(): void {
  }

  RetieveAllCourses() {
    const coursesObservable = this.courseService.getCourses();
    coursesObservable.subscribe((data: any) => {
      const t = data
      GlobalVariable.courses = Object.values(t)
      GlobalVariable.courses.key = Object.keys(t)
      this.courses = GlobalVariable.courses
    })
  }
  SelectButton(i: number) {
    GlobalVariable.course = this.courses[i]
    GlobalVariable.course.key = GlobalVariable.courses.key[i]
    if (GlobalVariable.email == 'faculty')
      this.router.navigate(['Admin'])
    else
      this.router.navigate(['Course'])
  }
}
