import { EventEmitter, Component,Output, Input,OnInit , ViewContainerRef,OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {GraphQLService} from '../../services/graph-ql.service';
import {Router} from '@angular/router';
import {ContentInfoComponent } from '../content-info/content-info.component';
import { Observable} from 'rxjs/Observable';
import {Blog} from '../../models/app.model';
import * as _ from 'underscore';
import { Store } from '@ngrx/store';
import {AppState } from '../../reducers/blogReducer';
import {StoreService} from '../../services/store-service.service';
import 'rxjs';

@Component({
  selector: 'app-content-parent',
  templateUrl: './content-parent.component.html',
  styleUrls: ['./content-parent.component.css'],
})

export class ContentParentComponent implements OnInit, OnDestroy{
allBlogs;
sub : any;
blog;
infoToggle;

  constructor(private graphqlService : GraphQLService,
   private router :Router, private store : Store<AppState>, private storeService : StoreService) { 
      this.loadBlogs();
    }

  loadBlogs(){
    this.sub =this.store.select('blogs')
    .subscribe( x =>{
       this.allBlogs = x;
       console.log("B state : ", this.allBlogs);
      });


     this.sub =this.store.select('author')
    .subscribe( x =>{
       console.log("A state : ", x);
      });
  }

  ngOnInit() {
  	this.infoToggle=false;
  }

  getInfo(title){
     this.router.navigate(['info', title]);
 	  }

  back(){
 	  this.infoToggle=!this.infoToggle;
   	}

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
