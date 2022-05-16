import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateUserService {
  users = [
    {email:'magneto@gmail.com', password: 'mag123'},
    {email:'nour@gmail.com', password: 'nour123'}
  ]
  constructor() { }

  ValidateUser(email: string, password: string) : boolean{
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == email && this.users[i].password == password){
          return true;
      }
    }
    return false;
  }
}
