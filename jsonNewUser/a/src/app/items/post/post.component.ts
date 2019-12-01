import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  myPost:Post []=[]

  //@Input() post:Post
  constructor(public postSvc: PostService) { }

  ngOnInit() {
    this.postSvc.getPostsBySelectedUser()
      .subscribe(data =>this.myPost= data)
  }

}
