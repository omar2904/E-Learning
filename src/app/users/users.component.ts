import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../Models/GlobalVariable';
import { StudentService } from '../Services/student/student.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  students = GlobalVariable.students
  constructor(private studentService: StudentService) {}
  check = true;

  ngOnInit(): void {
  }
  
  accpet(){
      this.check = true;
  }

  delete(){
    this.check = false;
  }

  AcceptPending(i:number){
    let student = this.students[i]
    student.pending = false
    const studentsObservable = this.studentService.updateStudent(this.students.key[i], student);
    studentsObservable.subscribe(()=>{
    }) 
  }

  DeleteStudent(i:number){
    const studentsObservable = this.studentService.deleteStudent(this.students.key[i]);
    studentsObservable.subscribe(()=>{
      GlobalVariable.students.splice(i, 1)
      this.students = GlobalVariable.students
    })
  }
}
