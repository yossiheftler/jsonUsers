import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  myComment
  constructor(public commentSvc: CommentsService) { }

  ngOnInit() {

    this.commentSvc.getcomments()
    .subscribe(data =>{
      this.myComment=data
    })


  }

}
