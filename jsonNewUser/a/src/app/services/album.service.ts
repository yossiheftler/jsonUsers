import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Album } from '../model/album';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  [x: string]: any;
   api = 'https://jsonplaceholder.typicode.com/photos/'
  //private usersapi = 'https://jsonplaceholder.typicode.com/albums?userId=#'

  selectedPost:Album
  constructor(private http:HttpClient,
    private usrsSvc:UserService) { }

    getAlbumsBySelectedUser():Observable<Album[]>{
      return this.http
        .get<Album[]>(this.api
            //.replace('#',this.usrsSvc.selectedUser.id.toString() )
          )
    }

    getLastAlbum():Observable<Album[]>{
      this.api +='?'
      for (let i = 91; i <= 100; i++) {
        this.api += 'id=' + i + '&'
      }
      return this.http.get<Album[]>(this.api)
    }
  
    // get(id:number):Observable<Album>{
    //   return this.http.get<Album>(this.api+id)
    // }
}
