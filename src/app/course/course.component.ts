import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../Models/GlobalVariable';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  course = GlobalVariable.course

  constructor() { }

  ngOnInit(): void {
  }

  
}
