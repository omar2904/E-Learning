import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateUserService } from '../validate-user/validate-user.service';

import { Student } from '../Models/Student';
import { GlobalVariable } from '../Models/GlobalVariable';
import { StudentService } from '../Services/student/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string = ""
  password: string = ""
  result: boolean = false;
  arr = []


  constructor(private studentService: StudentService, public router: Router) { }

  ngOnInit(): void {
  }

  validateData(): void {
    const studentsObservable = this.studentService.getStudents();
    studentsObservable.subscribe((data: any) => {
      const t = data
      GlobalVariable.students = Object.values(t)
      GlobalVariable.students.key = Object.keys(t)
      console.log(GlobalVariable.students[0])
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i]['email'] == this.email && this.arr[i]['password'] == this.password) {
          if(this.arr[i]['pending'])
          {
            alert("Account is not approved yet!")
            return
          }
          GlobalVariable.email = this.email
          GlobalVariable.student = this.arr[i]
          this.router.navigate(['Home'])
          alert("Successfully Logged In !")
          return
        }

      }
      if (this.email == 'faculty' && this.password == 'faculty') {
        GlobalVariable.email = this.email
        this.router.navigate(['Courses'])
        alert("Successfully Logged In !")
      }
      else if (this.email == 'admin' && this.password == 'admin') {
        this.router.navigate(['Users'])
        alert("Successfully Logged In !")
      }

      else {
        alert("Wrong email or password!")
      }
    })
  }
}
