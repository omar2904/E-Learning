import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  check = true;

  ngOnInit(): void {
  }
  
  accpet(){
      this.check = true;
  }

  delete(){
    this.check = false;
  }

}
