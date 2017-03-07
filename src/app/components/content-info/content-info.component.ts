import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {GraphQLService} from '../../services/graph-ql.service';
import {Blog, Author} from '../../models/app.model';
import { Store } from '@ngrx/store';
import {StoreService} from '../../services/store-service.service';
import {AppState } from '../../reducers/blogReducer';
import * as _ from 'underscore';

@Component({
  selector: 'app-content-info',
  templateUrl: './content-info.component.html',
  styleUrls: ['./content-info.component.css']
})
export class ContentInfoComponent implements OnInit {
  @Input()
  dataBlog;
 
  addedComment=[];
  commentToggle = false;
  newComment;
  subcription;
  title;

  constructor(private activateRouter : ActivatedRoute,
              private graphQlService : GraphQLService,
              private router : Router,
              public store : Store<AppState>,
              private storeService : StoreService
      ) { }

  ngOnInit() {
    this.getBlogTitle();
    this.getBlogInfo();
  }

  getBlogTitle(){
    this.activateRouter.params.subscribe(params =>{
    this.title = params['title'];
    });
  }

  getBlogInfo(){
    this.subcription =this.store.select('blogs')
    .subscribe(res=>{
      this.dataBlog = res;
      console.log("state : ", this.dataBlog);
      return this.dataBlog = _.find(this.dataBlog.blogs, {title : this.title});
    });
  }

  back(){
    this.storeService.selectedBlog(null);
    this.router.navigate(['']);
  }

  saveComment(){
    this.addedComment.push(this.newComment);
    this.storeService.saveComment(this.title, this.newComment);
    this.newComment = "";
  }

}
