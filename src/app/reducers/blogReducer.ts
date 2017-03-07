import { Blog } from '../models/app.model';
import { ActionReducer, Action } from '@ngrx/store';
import * as _ from 'underscore';

export const LOAD_BLOGS = 'LOAD_BLOGS';
export const SAVE_COMMENT = 'SAVE_COMMENT';
export const SELECT_BLOG = 'SELECT_BLOG';
export const SELECT_GENRE = "SELECT_GENRE";
export const ADD_BLOG = "ADD_BLOG";
export const LOAD_BLOGS_SUCCESS = "LOAD_BLOGS_SUCCESS";
export const LOAD_BLOGS_FAILED = 'LOAD_BLOGS_FAILED';

export interface AppState {
    blogs : Blog[]
    selectedBlog : string
    selectedGenre : string
    loading : boolean
}

export const initialState : AppState = {
    blogs : [],
    selectedBlog : null,
    selectedGenre : 'allNews',
    loading : false
};

var a;
const details =  (state, action) =>{
    switch (action.type) {
        case SAVE_COMMENT:
        if(state.title === action.payload.title){
            console.log(state);
            return Object.assign({}, state , {comment : state.comment.concat(action.payload.comment)});
        }
        return state;

        default:
            return state;
    }
}

export const blogReducer = (state = initialState, action :Action) => {
    switch (action.type) {
        case LOAD_BLOGS:
            return Object.assign({}, state, {
                blogs : action.payload,
                loading : true
            });
        case LOAD_BLOGS_SUCCESS:
            return Object.assign({}, state, {loading : false});

        case LOAD_BLOGS_FAILED:
            console.log("Cannot load the blogs");
            return Object.assign({}, state, {loading : false});

        case SAVE_COMMENT:
            const {title, comment} = action.payload;
            return Object.assign( {} , { blogs: state.blogs.map(states => details(states, action)) } );

        case SELECT_GENRE :
            return Object.assign({}, state, {selectedGenre : action.payload.genre});

        case ADD_BLOG:
            return Object.assign({}, state, {blogs : [action.payload, ...state.blogs]});

        case SELECT_BLOG:
            return Object.assign({}, state, {selectedBlog: action.payload});
                   
        default:
            return state;
    }
}