import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariable } from '../Models/GlobalVariable';


@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})

export class AllCoursesComponent implements OnInit {
  courses = GlobalVariable.courses
  course = GlobalVariable.course
  
  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  SelectButton(i: number) {
    this.course = this.courses[i]
    this.router.navigate(['course'])
  }
}
