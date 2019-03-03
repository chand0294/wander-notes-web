import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wander-web';
  loginSuccess:boolean=false;
  user:any;

  ngOnInit(){
    this.user = localStorage.getItem('uname');
  }
  constructor(){}

}
