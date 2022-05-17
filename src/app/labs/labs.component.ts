import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../Models/GlobalVariable';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {
  labs = GlobalVariable.course.labs

  constructor() { }

  ngOnInit(): void {
  }

}
