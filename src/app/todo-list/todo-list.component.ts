import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

}
