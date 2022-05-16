import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateUserService } from '../validate-user/validate-user.service';
import { StudentService } from '../Services/student/student.service';
import { Student } from '../Models/Student';
//import { getDatabase } from "firebase/database";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string = ""
  password: string = ""
  result : boolean = false;


  constructor(private validateUserService:ValidateUserService, private studentService: StudentService, public router: Router) { }

  ngOnInit(): void {
  }

  validateData() : void {
    const studentsObservable = this.studentService.getStudents();
    studentsObservable.subscribe((data:any)=>{
    if (data) {
     console.log(Object.keys(data))
      this.router.navigate(['Home'])
          alert("Successfully Logged In !")
    }

    else if(this.email == 'admin' && this.password == 'admin')
    {
      this.router.navigate(['Admin'])
      alert("Successfully Logged In !")
    }
    else if(this.email == 'faculty' && this.password == 'faculty')
    {
      this.router.navigate(['Users'])
      alert("Successfully Logged In !")
    }

    else {
      alert("Wrong email or password!")
    }
  })
  }
}
