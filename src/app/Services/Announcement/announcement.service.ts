import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/Models/Announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  baseURL   = "https://e-learning-system-7f89d-default-rtdb.firebaseio.com";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };

  getAnnouncements():Observable<Announcement>{
    return this.http.get<Announcement>(this.baseURL+'/announcements.json?print=pretty', this.httpOptions);
  };

  getAnnouncement(id: any):Observable<Announcement>{
    return this.http.get<Announcement>(this.baseURL+'/announcements'+ id +'.json', this.httpOptions);
  };

  addAnnouncement(announcement: any):Observable<Announcement>{
    console.log("add Announcement")
    return this.http.post<Announcement>(this.baseURL + '/announcements.json',
    JSON.stringify(announcement), this.httpOptions);
  };

  deleteAnnouncement(id:any){
    return this.http.delete<Announcement>(this.baseURL+'/announcements'+ id +'.json', this.httpOptions);
  };
}
