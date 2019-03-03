import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname: string = "";
  pass: string = "";
  user: any;
  currentUser: any = [];
  errorMessage: string = "";
  constructor(public globalService: GlobalServiceService, public route: Router, public AppCom: AppComponent) { }

  ngOnInit() {
    this.AppCom.loginSuccess = false;
  }

  login(uname: string, pass: string) {

    if (uname === undefined || pass === undefined || uname === "" || pass === "") {
      this.errorMessage = "Please enter a valid userame and password";
      this.route.navigate(['login']);
    } else {
      this.globalService.login(uname, pass).subscribe(
        data => {

          this.currentUser = data;
          if (this.currentUser.length > 0) {
            localStorage.setItem('user', this.currentUser);
            localStorage.setItem('uname', uname);

            this.AppCom.loginSuccess = true;
            this.AppCom.user = localStorage.getItem('uname');
            console.log(this.AppCom.user);
            this.route.navigate(['dashboard']);
          } else {
            this.errorMessage = "Invalid Username or Password";
            this.route.navigate(['login']);
          }

        }
      );
    }


  }

}
export class User {
  id: number;
  uname: string;
  pass: string;
  fullName: string;
  email: string;
  contact: string;
  activeIndicator: string;

}