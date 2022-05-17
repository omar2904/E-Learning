import { Component, OnInit } from '@angular/core';
import { Course } from '../Models/Course';
import { GlobalVariable } from '../Models/GlobalVariable';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {
  lectures = GlobalVariable.course.lectures
  
  constructor() { }

  ngOnInit(): void {
  }

}
