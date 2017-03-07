import { Author } from '../models/app.model';
import { ActionReducer, Action } from '@ngrx/store';
import * as _ from 'underscore';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';

export interface AuthorState{
	author : Author
	loggedIn : boolean
}

export const initialState : AuthorState = {
	author : null,
	loggedIn : false
}
export const authorReducer = (state = initialState, action : Action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			console.log(action.payload);
			return state;

		case LOGIN_RESPONSE: 
			return state;
		
		default:
			return state;
	}


}
