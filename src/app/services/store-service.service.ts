import { Injectable } from '@angular/core';
import {GraphQLService} from './graph-ql.service';
import * as _ from 'underscore';
import { Store } from '@ngrx/store';
import { Blog } from '../models/app.model';
import {LOAD_BLOGS, SAVE_COMMENT, SELECT_GENRE,ADD_BLOG,SELECT_BLOG,AppState} from '../reducers/blogReducer';
import {LOGIN_REQUEST, LOGIN_RESPONSE} from '../reducers/authorReducer';


@Injectable()
export class StoreService {

  constructor( private graphqlService : GraphQLService, private store : Store<AppState[]>) { }

  loadBlogs(){
  	var a= this.getBlogs();
    //this.store.dispatch({type: LOAD_BLOGS });
  }

	getBlogs(){
	  	var data;
   return this.graphqlService.getAllBlog().map((x)=>x).subscribe(y=>{
      data = y.allBlogs;
      data = _.where(data, {});
      data = data.reverse();
      this.store.dispatch({
      	type: LOAD_BLOGS,
      	payload : data
      });
    });
  }

  saveComment(title, comment){
  	this.store.dispatch({
  		type: SAVE_COMMENT,
  		payload : {title : title, comment : comment}
  	});
  }

  selectGenre(genre){
    this.store.dispatch({
      type : SELECT_GENRE,
      payload : {genre : genre}
    })
  }

  addBlog(data){
    this.store.dispatch({
      type : ADD_BLOG,
      payload : data
    })
  }

  selectedBlog(title){
    console.log(title);
    this.store.dispatch({
      type : SELECT_BLOG,
      payload : title
    })
   }

  loginRequest(author){
    this.store.dispatch({
      type:LOGIN_REQUEST,
      payload: author
    })
  }



}
