import { Injectable } from '@angular/core';
import { Album } from '../model/album';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private api = 'https://jsonplaceholder.typicode.com/photos'
  private usersapi = 'https://jsonplaceholder.typicode.com/photos?userId=#'
 
  selectedPost:Album
  constructor(private http:HttpClient,
    private usrsSvc:UserService) { }

    getPostsBySelectedUser():Observable<Album[]>{
      return this.http
        .get<Album[]>(this.usersapi
            .replace('#',this.usrsSvc.selectedUser.id.toString()))
    }
  
    get(id:number):Observable<Album>{
      return this.http.get<Album>(this.api+id)
    }
}
