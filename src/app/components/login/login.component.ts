import { Component, OnInit } from '@angular/core';
import {GraphQLService} from '../../services/graph-ql.service';
import { Router } from '@angular/router';
import {CookieServiceService} from '../../services/cookie-service.service';
import {StoreService} from '../../services/store-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [CookieServiceService]
})
export class LoginComponent implements OnInit {

  constructor( private graphQlService : GraphQLService,
               private router: Router,
               private cookieService : CookieServiceService,
               private storeService : StoreService) { }
author = {
	email: "",
	password : ""
}
invalid = false;
  ngOnInit() {
  }

  login(){
  	return this.graphQlService.login(this.author)
      .map((data)=>data.data.getLogin)
      .subscribe(x=>{
      console.log(x);
  		if(x === null) {
        alert("sss");
  			this.invalid=true;
      }
  		else{
        this.storeService.loginRequest(this.author);
        this.cookieService.setCookie('email', this.author.email);
        this.cookieService.setCookie('login', true);
  			this.router.navigate(['']);
  		}
  	}); 
  }
}
