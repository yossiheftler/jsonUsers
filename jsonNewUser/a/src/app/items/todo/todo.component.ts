import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'item-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo:Todo
  constructor() { }

  ngOnInit() {
  }

}
