import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { stringify } from '@angular/core/src/util';
import { GlobalServiceService } from '../global-service.service';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notes: any = [];
  constructor(public globalService: GlobalServiceService, public AppComp: AppComponent) { }

  ngOnInit() {

    this.globalService.getAllNotes().subscribe(data => {
      this.AppComp.loginSuccess = true;
      this.AppComp.user = localStorage.getItem("uname");

      this.notes = data;
    });
  }

  addNote(title: string, description: string) {
    this.globalService.addNote(title, description).subscribe(data => {
      this.notes = data;
    });
  }

  updateNote(note: any) {
    this.globalService.updateNote(note).subscribe(data => {
      // this.notes=data;
      this.ngOnInit();
    }

    );
  }

  deleteNote(note: any) {
    this.globalService.deleteNote(note).subscribe(data => {
      this.ngOnInit();
    }
    );
  }
  getNotes() {
    this.ngOnInit();
  }

}

