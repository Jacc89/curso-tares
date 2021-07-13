import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { LoggerService } from './logger.service';

export interface Todo {
  id?: number;
  autor: string;
  titulo: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  autoIncrementId: number;

  baseUrl: string;

  constructor(
    private logger: LoggerService,
    private httpClient: HttpClient
  ) {
    this.todos = [];
    this.autoIncrementId = 1;

    this.baseUrl = 'http://localhost:3000/api/todos'
  }

  getAll() {
    return this.httpClient.get<Todo[]>(`${this.baseUrl}/all`);
  }

  getById(id: number) {
    return this.httpClient.get<Todo>(`${this.baseUrl}/${id}`);
  }

  add(newTodo: Todo) {
    this.logger.log('Agregamos una nueva tarea');
    newTodo.id = this.autoIncrementId++;
    // newTodo.titulo += '$';
    this.todos.push(newTodo);
  }

  delete(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1);
  }
}
