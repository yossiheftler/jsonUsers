import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  myPost:Post []=[]

  //@Input() post:Post
  constructor(public postSvc: PostService) { }

  ngOnInit() {
    this.postSvc.getPostsBySelectedUser()
      .subscribe(data =>this.myPost= data)
  }

}
