import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginmodel: any = {};
  constructor() { }

  ngOnInit() {
  }

  Login(f: any) {

    console.log(this.loginmodel);

  }

}
