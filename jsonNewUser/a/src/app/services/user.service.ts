import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private api = 'https://jsonplaceholder.typicode.com/users/'
  selectedUser: User
  cachedData: User[]

  myData: BehaviorSubject<User[]>
    = new BehaviorSubject<User[]>([])

  constructor(private http: HttpClient) {
    this.http.get<User[]>(this.api)
      .subscribe(data => this.myData.next(data))
  }

  getUsers(): Observable<User[]> {
    console.log('UserService getUsers');
    return this.http.get<User[]>(this.api)

  }

  getUsers2(): void {
    this.http.get<User[]>(this.api)
      .subscribe(x => this.cachedData = x)
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.api + id)
  }
}