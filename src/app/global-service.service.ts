import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor(public _http: HttpClient) { }

  getAllNotes() {
    let url: string;
    url = environment.baseUrl + 'getAllNotes';
    console.log(url);

    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Access-Control-Allow-Credentials", "true");


    return this._http.get(url, { headers });
  }

  addNote(title:string,description:string) {
    let url: string;
    url = environment.baseUrl + 'addNote';
    console.log(url);

    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Access-Control-Allow-Credentials", "true");

   
    let user:string = localStorage.getItem('uname');


    let formData=new FormData();
    formData.append("title",title);
    formData.append("description",description);
    formData.append("user",user);

    return this._http.post(url, formData,{ headers });
  }


  updateNote(note:any){
    let url: string;
    url = environment.baseUrl + 'updateNote';
    console.log(url);

    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Access-Control-Allow-Credentials", "true");

    let formData=new FormData();
    formData.append("note",JSON.stringify(note));

    return this._http.post(url, formData,{ headers });
  }

  deleteNote(note){
    let url: string;
    url = environment.baseUrl + 'deleteNote';
    console.log(url);

    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Access-Control-Allow-Credentials", "true");

    let formData=new FormData();
    formData.append("note",JSON.stringify(note));

    return this._http.post(url, formData,{ headers });
  }

  addUser(user:any){

    let url: string;
    url = environment.baseUrl + 'addUser';
    console.log(url);

    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Access-Control-Allow-Credentials", "true");

    let formData=new FormData();
    formData.append("user",JSON.stringify(user));
  

    return this._http.post(url, formData,{ headers });

  }

  login(uname:string,pass:string){
    let url: string;
    url = environment.baseUrl + 'login';
    console.log(url);

    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Access-Control-Allow-Credentials", "true");

    let formData=new FormData();
    formData.append("uname",uname);
    formData.append("pass",pass);
  

    return this._http.post(url, formData,{ headers });
  }

}
