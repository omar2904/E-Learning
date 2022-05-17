import { Component, OnInit, Inject } from '@angular/core';
import { GlobalVariable } from '../Models/GlobalVariable';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  course =  GlobalVariable.course
  lec = false;
  lab = false;

  constructor() { }

  ngOnInit(): void {
  }

  AddLec(){
    this.lec = !this.lec
  }

  AddLab(){
    this.lab = !this.lab
  }
  UpdateCourses(){
    
  }
}

