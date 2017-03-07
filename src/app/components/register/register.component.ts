import { Component, OnInit } from '@angular/core';
import {GraphQLService} from '../../services/graph-ql.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private graphqlService: GraphQLService, private router : Router) { }
authorModel = {
	name : "",
	age : '',
	city : "",
	email : "",
	password: "",
	status : "approved"
}
  ngOnInit() {
  }


	register(){
		console.log(this.authorModel);
		this.graphqlService.getAuthorByEmail(this.authorModel.email).map((x)=>x.data.Author).subscribe((res)=>{
                          if(res.length){
                          	if(res[0].status=='pending'){
                          		this.graphqlService.updateAuthor(this.authorModel).subscribe((x)=>{
                          	                          			this.router.navigate(['login']);
                          	                          	});
                          		alert("You were guest before.. But now, Welcome!")
                          	}
                          	else{
                          		alert("Youre already registered, please Login");
                          		this.router.navigate(['login']);
                          	}
                          }
                          else{
                          	this.graphqlService.register(this.authorModel).subscribe((x)=>{
									this.router.navigate(['login']);
								});
                          	alert("Go, Log In!");
                          }
                        });

		
	}
}
