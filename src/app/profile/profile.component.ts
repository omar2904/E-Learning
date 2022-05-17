import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../Models/GlobalVariable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  studentProfile = GlobalVariable.student

  constructor() { }

  ngOnInit(): void {
  }

}
