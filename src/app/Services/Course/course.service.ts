import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from 'src/app/Models/Course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  
  baseURL   = "https://e-learning-system-7f89d-default-rtdb.firebaseio.com";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };

  getCourses():Observable<Course>{
    return this.http.get<Course>(this.baseURL+'/Courses.json?print=pretty', this.httpOptions);
  };

  getCourse(id: any):Observable<Course>{
    return this.http.get<Course>(this.baseURL+'/Courses.json/'+ id, this.httpOptions);
  };

  addCourse(Course: any):Observable<Course>{
    console.log("add Course")
    return this.http.post<Course>(this.baseURL + '/Courses.json',
    JSON.stringify(Course), this.httpOptions);
  };

  deleteCourse(id:any){
    return this.http.delete<Course>(this.baseURL + '/Courses.json/'+id,this.httpOptions)
  };
}
