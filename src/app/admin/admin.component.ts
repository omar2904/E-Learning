import { Component, OnInit, Inject } from '@angular/core';
import { GlobalVariable } from '../Models/GlobalVariable';
import { AnnouncementService } from '../Services/Announcement/announcement.service';
import { Announcement } from '../Models/Announcement';
import { CourseService } from '../Services/Course/course.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  course = GlobalVariable.course
  lec = false;
  lab = false;
  announcement = ""
  lectureName = ''
  LecturePath = ''
  labName = ''
  labPath = ''

  constructor(private announcementService: AnnouncementService, private courseService: CourseService) { }

  ngOnInit(): void {
  }

  AddLec() {
    this.lec = !this.lec

  }

  AddLab() {
    this.lab = !this.lab
  }

  UploadLecture() {
    
    if (this.lectureName && this.LecturePath) {
      let lec = {
        name: this.lectureName,
        path: this.LecturePath
      }
      this.course.lectures.push(lec)
      const courcesObservable = this.courseService.updateCourse(this.course.key, this.course);
      courcesObservable.subscribe(() => {
        this.lec = false
        GlobalVariable.course = this.course
      })
    }
  }

  UploadLab() {
    if (this.labName && this.labPath) {
      this.course.lectures.append(this.lectureName)
      const courcesObservable = this.courseService.updateCourse(this.course.key, this.course);
      courcesObservable.subscribe(() => {
        GlobalVariable.course = this.course
      })
    }
  }

  AddAnnouncement() {
    let today = new Date().toISOString().slice(0, 10)
    let announce = new Announcement(this.announcement, this.course.dr, today);
    const announcementObservable = this.announcementService.addAnnouncement(announce);
    announcementObservable.subscribe(() => {
      GlobalVariable.announcements;
      alert("Added announcement!")
    })
  }
}