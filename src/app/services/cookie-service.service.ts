import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class CookieServiceService {

  constructor() { }

  setCookie(key, value){
  	document.cookie = key + "=" + value + ";path=/";
  }
  getCookie(cname){
  	var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return ;
  }

  checkLogin() : Observable<boolean>{
  	var cname = 'login';
  	if(this.getCookie(cname) == 'true'){
  		return Observable.of(true);
  	}
  	else{
  		return Observable.of(false);
  	}

  }

  logOut(){
  	var cname = 'login';
  	this.setCookie('login', false);
  }

}
