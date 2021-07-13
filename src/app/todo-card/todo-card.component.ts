import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
