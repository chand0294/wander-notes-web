import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage: string = "";
  user: any = {};
  userlist: any = [];
  constructor(public globalService: GlobalServiceService, public route: Router) { }

  ngOnInit() {
    this.errorMessage = "";
  }

  addUser(user: any) {
    if (user === null || user === undefined) {
      this.errorMessage = "Please fill in the details";
      //this.route.navigate(['signup']);
    } else {
      this.globalService.addUser(user).subscribe(data => {
        this.userlist = data;
        if (this.userlist.length > 0) {
          this.route.navigate(['']);
        } else {
          this.errorMessage = "Username , password and full name are required !";
          // this.route.navigate(['signup']);
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