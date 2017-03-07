import {GraphQLService} from '../../services/graph-ql.service';
import { Component, OnInit , Output, EventEmitter, ViewChild} from '@angular/core';
import {CookieServiceService} from '../../services/cookie-service.service';
import {Blog, Author, IBlog} from '../../models/app.model';
import { ActivatedRoute, Router } from '@angular/router';
import {ContentComponent} from '../../components/content-parent/content/content.component';
import {StoreService} from '../../services/store-service.service';
@Component({
  selector: 'app-content-adder',
  templateUrl: './content-adder.component.html',
  styleUrls: ['./content-adder.component.css']
})

export class ContentAdderComponent implements OnInit {
ifGuest;
	constructor(private graphqlService : GraphQLService,
              private cookieService : CookieServiceService,
              private router : Router,
              public storeService : StoreService) { 
        this.ifGuest = false;   }

	blog = {
       title : '',
      info : '',
      mainImg : '',
      genre : '',
      rating : '',
  };

 // public blog : IBlog;

  genreSet = [
    {value: 'india', viewValue: 'India'},
    {value: 'sports', viewValue: 'Sports'},
    {value: 'music', viewValue: 'Music'},
    {value: 'tech', viewValue: 'Techonology'}
  ];

  guestEmail;
  author;
  blogStatus;
  authorId;

  ngOnInit() {
    if(this.cookieService.checkLogin()){
      this.blogStatus = 'approved';
      var email = this.cookieService.getCookie('email');
      var data = {email: email, name : ''};
      this.graphqlService.getAuthorByEmail(email)
        .map((x)=>x.data.Author[0])
        .subscribe((res)=>{
          this.author=res.name;
          this.authorId =res.authorId;
          console.log(res);
        });
      }
    else{
      this.author = 'guest';
      this.ifGuest = true;
      this.blogStatus = 'pending';
    }
  }

response;
  saveData(){
    console.log(this.blog);
      var dataToBeAdded = {
      title : this.blog.title,
      info : this.blog.info,
      mainImg : this.blog.mainImg,
      genre : this.blog.genre,
      rating : this.blog.rating,
      author : this.author,
      status : this.blogStatus,
      authorId: this.authorId,
    }
    if(this.ifGuest){
      var guestData = {
        email : this.guestEmail,
        status: "pending",
        name : 'guest'
      };
      var guestAuthorId;
      this.graphqlService
        .getAuthorByEmail(this.guestEmail)
        .map((x)=>x.data.Author[0])
        .subscribe((res)=>{
          guestAuthorId =res.authorId;
          });
       if(guestAuthorId == undefined){
          this.graphqlService.register(guestData)
            .map((x)=>x.data.addAuthor)
            .subscribe((y)=>{
              guestAuthorId = y.authorId;
             });
       }
     dataToBeAdded.authorId=guestAuthorId;
    }
    console.log("data to be added : ", dataToBeAdded);
    this.storeService.addBlog(dataToBeAdded);
    // this.response = this.graphqlService.addContent(dataToBeAdded)
    //                                     .subscribe((x)=>{});
    // this.graphqlService.getAllBlog().refetch();
  	this.router.navigate(['']);
  }





}
