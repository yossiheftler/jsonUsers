import { Injectable } from '@angular/core';
//import { Post } from '../model/post';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

   api = 'https://jsonplaceholder.typicode.com/posts/'
   usersapi = 'https://jsonplaceholder.typicode.com/posts?userId=#'

  // selectedPost:Post
  constructor(private http:HttpClient
    //,
    //private usrsSvc:UserService
  ) { }

    getPostsBySelectedUser():Observable<Post[]>{
      return this.http
        .get<Post[]>(this.api
          )
    }

    getLastPost():Observable<Post[]>{
      this.api +='?'
      for (let i = 91; i <= 100; i++) {
        this.api += 'id=' + i + '&'
      }
      return this.http.get<Post[]>(this.api)
    }
  
    
       
}
