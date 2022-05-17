import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/app/Models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseURL   = "https://e-learning-system-7f89d-default-rtdb.firebaseio.com";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };

  getStudents():Observable<Student>{
    return this.http.get<Student>(this.baseURL+'/students.json?print=pretty', this.httpOptions);
  };

  getStudent(id: any):Observable<Student>{
    return this.http.get<Student>(this.baseURL+'/students.json/'+ id, this.httpOptions);
  };

  addStudent(student: any):Observable<Student>{
    console.log("add student")
    return this.http.post<Student>(this.baseURL + '/students.json',
    JSON.stringify(student), this.httpOptions);
  };

  deleteStudent(id:any){
    return this.http.delete<Student>(this.baseURL + '/students.json/'+id,this.httpOptions)
  };
}
