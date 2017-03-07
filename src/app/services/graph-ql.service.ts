import { Injectable } from '@angular/core';
import { Apollo , ApolloQueryObservable} from 'apollo-angular';
import {
	addAuthorMutation,
	addContentQuery,
	addNewCommentQuery,
	getAllBlogQuery,
	getAuthorQuery,
	getBlogByTitle,
	loginQuery,
	updateAuthorQuery
} from './query';


@Injectable()
export class GraphQLService {
  constructor(private apollo: Apollo) { }
 newContent: any;
  addContent(data) {
  	this.newContent = this.apollo.mutate({
  		mutation : addContentQuery,
  		variables : {
  			title : data.title,
  			mainImg : data.mainimg,
  			genre : data.genre,
  			comment : data.comment,
  			rating : data.rating,
  			info : data.info,
  			author: data.author,
  			status: data.status,
  			authorId : data.authorId,
  		}
  	});
    return this.newContent;
  }

allBlog : any;
  getAllBlog(){
  	this.allBlog = this.apollo.watchQuery({
  		query : getAllBlogQuery
  	}).map((x)=>x.data);
  	return this.allBlog;
  }

a :any;
  getBlogByTitle(title){
  	this.a =  this.apollo.watchQuery({
  		query: getBlogByTitle,
  		variables : {
  			title: title
  		}
  	});
  	return this.a;
  }

b : any;
  saveComment(comment, title){
  	this.b=  this.apollo.mutate({
  		mutation: addNewCommentQuery,
  		variables: {
  			title : title,
  			comment : comment
  		},
  		optimisticResponse: {
  			__typename : 'Mutation',
  			comment : comment
  		}
  	});
return this.b;
  }

registerUser: any;
  register(data){
  	alert(JSON.stringify(data));
  	this.registerUser= this.apollo.mutate({
  		mutation : addAuthorMutation,
  		variables : {
  			name : data.name,
  			city : data.city,
  			password: data.password, 
  			email : data.email,
  			age : data.age,
  			status : data.status,
  		}
  	});
  	return this.registerUser;
  }

loginReply : any;
  login(data){
  	this.loginReply= this.apollo.query({
  		query: loginQuery,
  		variables : {
  			email : data.email, 
  			password : data.password
  		}
  	});
  	return this.loginReply;
  }

  author : any;
  getAuthorByEmail(email){
  	this.author = this.apollo.query({
  		query: getAuthorQuery,
  		variables: {
  			email: email
  		}
  	});
  	return this.author;
  }

update : any;
  updateAuthor(data){
  	this.update = this.update = this.apollo.mutate({
  		mutation : updateAuthorQuery,
  		variables : {
  			name : data.name,
  			city : data.city,
  			password: data.password, 
  			email : data.email,
  			age : data.age,
  			status : data.status,
  		}
  	});
  	return this.update;
  }
}
