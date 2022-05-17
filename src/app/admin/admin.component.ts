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

  AddAnnouncement(){
    let s = new Announcement(this.announcement, this.course.dr,Date.now.toString());
    const announcementObservable = this.announcementService.addAnnouncement(s);
    announcementObservable.subscribe(()=>{
      alert("Added announcement!")
    })
  }
}

