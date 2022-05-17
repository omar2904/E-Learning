import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../Models/GlobalVariable';
import { StudentService } from '../Services/student/student.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  courses =  GlobalVariable.student.courses;
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {

  }

}
