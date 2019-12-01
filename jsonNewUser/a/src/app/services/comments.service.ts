import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { PostComponent } from '../items/post/post.component';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private api = 'https://jsonplaceholder.typicode.com/comments/'

  selectedComments:Comment
  constructor(private http:HttpClient) { }

  
    getcomments():Observable<Comment[]>{
      return this.http
        .get<Comment[]>(this.api)
    }
  
    getCommentForPosts(postIds){
      let u = this.api + '?'
      for (let i = 0; i < postIds.length; i++) {
        u += `postId=${postIds[i]}&`// "id=" + i + "&"
       
      }
      return this.http.get<Comment[]>(u)
    }
}
