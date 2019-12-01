import { Injectable } from '@angular/core';
import { Photo } from '../model/photos';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private api = 'https://jsonplaceholder.typicode.com/photos/'
  private usersapi = 'https://jsonplaceholder.typicode.com/photos?userId=#'

  selectedPost:Photo
  constructor(private http:HttpClient,
    private usrsSvc:UserService) { }

    getPhotosBySelectedUser():Observable<Photo[]>{
      return this.http
        .get<Photo[]>(this.usersapi
            .replace('#',this.usrsSvc.selectedUser.id.toString()))
    }
  
    get(id:number):Observable<Photo>{
      return this.http.get<Photo>(this.api+id)
    }
}
