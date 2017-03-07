 import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {GraphQLService} from '../services/graph-ql.service';
import { Store } from '@ngrx/store';
import {LOAD_BLOGS, LOAD_BLOGS_FAILED, LOAD_BLOGS_SUCCESS, AppState} from '../reducers/blogReducer';

@Injectable()
export class BlogEffectService {

  constructor(private actions: Actions, public graphQlService : GraphQLService, public store : Store<AppState>) { }

  // @Effect() load_blog() : Observable<Actions> {
  //   return this.actions
  //   .ofType(LOAD_BLOGS)
  //   .switchMap((res)=>this.graphQlService.getAllBlog()
  //     .map((blogs)=>{blogs)
  //       this.store.dispatch({type: LOAD_BLOGS_SUCCESS, payload : {blogs: blogs.allBlogs}})
  //       })
  //     )
  // }

  @Effect() add_comment() : Observable<Actions> {
  	return this.actions
  	.ofType('SAVE_COMMENT')
  	.switchMap((action)=>this.graphQlService.saveComment(action.payload.comment, action.payload.title));
  }

  @Effect() add_blog() : Observable<Actions> {
  	return this.actions
  	.ofType('ADD_BLOG')
  	.switchMap((act)=>this.graphQlService.addContent(act.payload));
  }
}
