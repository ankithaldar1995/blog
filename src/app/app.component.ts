import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ContentAdderComponent } from './components/content-adder/content-adder.component';
import { ContentComponent } from './components/content-parent/content/content.component';
import {GraphQLService} from './services/graph-ql.service';
import { Apollo , ApolloQueryObservable} from 'apollo-angular';
import {CookieServiceService} from './services/cookie-service.service';
import {StoreService} from './services/store-service.service';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [GraphQLService, CookieServiceService, StoreService]
})

export class AppComponent  {
loginCheck : boolean;
	constructor(private router: Router, 
    private graphqlService : GraphQLService,
    private cookieService : CookieServiceService,
    public storeService: StoreService,
    ){}

    ngOnInit(){  
      this.cookieService.checkLogin().subscribe(x=>{
        this.loginCheck = x;
      });
      this.storeService.loadBlogs();
    }

    home(){
       this.router.navigate(['']);
    }

    logOut(){
      this.cookieService.logOut();
      this.router.navigate(['']);
    }

    byGenre(genre){
      this.storeService.selectGenre(genre);
      if(genre !== 'allNews'){
        this.router.navigate(['contentByFilter', genre]);
      }
    }
}
