import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../Models/GlobalVariable';
import { AnnouncementService } from '../Services/Announcement/announcement.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  announcements: any;
  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    const announcementObservable = this.announcementService.getAnnouncements();
    announcementObservable.subscribe((data: any)=>{
      GlobalVariable.announcements = []
      GlobalVariable.announcements = Object.values(data)
      console.log(GlobalVariable.announcements)
      this.announcements = GlobalVariable.announcements;

    })
  }

}
