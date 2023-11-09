import { Component, Input, inject } from '@angular/core';
import { Todo } from '../todos-home/todo';
import { TodosService } from '../todos-home/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() refreshFunction!: () => void;
  todoService: TodosService = inject(TodosService);
  deleted = false;

  toggleTodo(id: number) {
    this.todoService.toggleTodoCompleted(id).then((v) => {
      this.todo = v;
    });
  }

  deleteTodo(id: number) {
    this.deleted = true;
    this.todoService.deleteTodo(id).then(() => {
      this.refreshFunction();
    });
  }
}
