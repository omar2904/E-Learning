import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateUserService } from '../validate-user/validate-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = ""
  password: string = ""

  constructor(private validateUserService:ValidateUserService, public router: Router) { }

  ngOnInit(): void {
  }

  addUser(): void {
    this.validateUserService.users.push({email:this.email, password:this.password});
    this.router.navigate(['Login'])
      alert("Successfully Registered !")
  }

}
