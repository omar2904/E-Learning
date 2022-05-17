import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../Models/GlobalVariable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  students = GlobalVariable.students
  constructor() {
    console.log(GlobalVariable.students)
   }
  check = true;

  ngOnInit(): void {
  }
  
  accpet(){
      this.check = true;
  }

  delete(){
    this.check = false;
  }

}
