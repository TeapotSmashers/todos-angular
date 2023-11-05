import { Component, inject } from '@angular/core';
import { TodosService } from './todos.service';
import { Todo } from './todo';

@Component({
  selector: 'app-todos-home',
  templateUrl: './todos-home.component.html',
  styleUrls: ['./todos-home.component.css'],
})
export class TodosHomeComponent {
  value = '';
  todos: Todo[] = [];
  todosService: TodosService = inject(TodosService);

  constructor() {
    this.todosService.getTodos().then((v) => {
      this.todos = v;
    });
  }
}
