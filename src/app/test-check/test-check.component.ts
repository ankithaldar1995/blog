import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { Component, OnInit, Output, EventEmitter,trigger,
  state,
  style,
  transition,
  animate, group } from '@angular/core';
import {Blog, Author} from '../models/app.model';

@Component({
  selector: 'app-test-check',
  templateUrl: './test-check.component.html',
  styleUrls: ['./test-check.component.css'],
animations: [
  trigger('flyInOut', [
    state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
    transition('void => *', [
      style({width: 10, transform: 'translateX(50px)', opacity: 0}),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)',
          width: 120
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])
]
})
export class TestCheckComponent implements OnInit {

   constructor(public store : Store<number>) { 
    
	}
  ngOnInit() {
  }




}
