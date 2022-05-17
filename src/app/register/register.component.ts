import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateUserService } from '../validate-user/validate-user.service';
import { StudentService } from '../Services/student/student.service';
import { Student } from '../Models/Student';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = ""
  password: string = ""
  name: string = ""
  department: string = ""
  year: string = ""

  constructor(private validateUserService:ValidateUserService, private studentService: StudentService, public router: Router) { }

  ngOnInit(): void {
    
  }

  addUser(): void {
    let s = new Student(this.email, this.password, this.name, this.department, this.year);
    const studentsObservable = this.studentService.addStudent(s);
    studentsObservable.subscribe(()=>{
      this.router.navigate(['Login'])
      alert("Successfully Registered !")
    })
   
  }

}
