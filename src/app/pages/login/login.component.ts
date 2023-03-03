import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

name:String = ''
password:String=''



signIn(){

  console.log(this.name,this.password)
}
}
