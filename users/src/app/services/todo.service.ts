import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  [x: string]: any;
  private api = 'https://jsonplaceholder.typicode.com/todos/'
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.api)
  }

  get(id:number):Observable<Todo>{
    return this.http.get<Todo>(this.api + id)
  }
}
