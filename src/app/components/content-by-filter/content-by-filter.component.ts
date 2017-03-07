import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {GraphQLService} from '../../services/graph-ql.service';
import { Store } from '@ngrx/store';
import {AppState } from '../../reducers/blogReducer';
import * as _ from 'underscore';

@Component({
  selector: 'app-content-by-filter',
  templateUrl: './content-by-filter.component.html',
  styleUrls: ['./content-by-filter.component.css'],
  providers:  [],
})
export class ContentByFilterComponent implements OnInit, OnDestroy {

genre;
sub;
dataBlog;
storeData;

  constructor(public activateRouter: ActivatedRoute, public graphQlService: GraphQLService, public store: Store<AppState>) {
  }

  ngOnInit() {
    this.loadFilteredBlog();
 }

 loadFilteredBlog(){
   this.sub = this.store.select('blogs').subscribe(x=>{
      this.storeData = x;
      this.genre = this.storeData.selectedGenre;
      this.dataBlog = _.where(this.storeData.blogs, {genre : this.genre});
    });
 }

 ngOnDestroy(){}

}
