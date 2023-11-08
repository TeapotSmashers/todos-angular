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

  refreshList() {
    this.todosService.getTodos().then((v) => {
      this.todos = v.sort((a, b) => {
        // sort by created_at
        if (a.created_at < b.created_at) {
          return -1;
        }
        if (a.created_at > b.created_at) {
          return 1;
        }
        return 0;
      });
    });
  }

  constructor() {
    this.todosService.getTodos().then((v) => {
      this.todos = v.sort((a, b) => {
        // sort by created_at
        if (a.created_at < b.created_at) {
          return -1;
        }
        if (a.created_at > b.created_at) {
          return 1;
        }
        return 0;
      });
    });
  }
}
