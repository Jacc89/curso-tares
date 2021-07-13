import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todoList: Todo[];

  constructor() {
    this.todoList = [];
  }

  ngOnInit(): void {
  }

  onTodoCreated(event) {
    this.todoList.push(event);
    console.log(this.todoList);
  }

}
