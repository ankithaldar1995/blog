import { EventEmitter, Component,Output, Input,OnInit , ViewContainerRef,OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {GraphQLService} from '../../../services/graph-ql.service';
import {StoreService} from '../../../services/store-service.service';
import {Router} from '@angular/router';
// import {ContentInfoComponent } from '../../content-info/content-info.component';
import { Observable} from 'rxjs/Observable';
import {Blog} from '../../../models/app.model';
import * as _ from 'underscore';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit, OnDestroy {

  constructor( private graphqlService : GraphQLService,
               private router :Router, 
               private storeService : StoreService ) { }

  @Input()
  dataBlog;

  @Output()
  change : EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  moreInfo(title){
    this.storeService.selectedBlog(title);
    this.change.emit(title);
  }

  ngOnDestroy(){
  }

  

}
