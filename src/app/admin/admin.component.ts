import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  lec = false;
  lab = false;

  constructor() { }

  ngOnInit(): void {
  }

  AddLec(){
    this.lec = !this.lec
  }

  AddLab(){
    this.lab = !this.lab
  }
}

