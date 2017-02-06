import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import { Observable } from "rxjs/Rx";

import { UserDataService } from './user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  userpost:FormGroup;
  constructor(fb:FormBuilder, private userSrvc:UserDataService){
    this.userpost = fb.group({
      'name':['',Validators.required],
      'email':['',Validators.required],
      'post':['',[Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(form){
    console.log(form.value);
  }

  getData() {
  	console.log('getting data');

  	Observable.forkJoin([this.userSrvc.getUserData(), this.userSrvc.getUserPost()]).subscribe(results => {
  		console.log(results);
  		console.log(this.userpost);
  		let user = {
	  		name: results[0].name,
	  		email: results[0].email,
	  		post: results[1][0].body
  		};
  		this.userpost.patchValue(user);
  	});
}}
