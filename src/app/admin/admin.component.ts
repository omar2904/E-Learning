import { Component, OnInit, Inject } from '@angular/core';
import { GlobalVariable } from '../Models/GlobalVariable';
import { AnnouncementService } from '../Services/Announcement/announcement.service';
import { Announcement } from '../Models/Announcement';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  course =  GlobalVariable.course 
  lec = false;
  lab = false;
  announcement = ""

  constructor(private announcementService: AnnouncementService ) { }

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

  AddAnnouncement(){
    let today = new Date().toISOString().slice(0, 10)
    let announce = new Announcement(this.announcement, this.course.dr,today);
    const announcementObservable = this.announcementService.addAnnouncement(announce);
    announcementObservable.subscribe(()=>{
      alert("Added announcement!")
    })
  }
}