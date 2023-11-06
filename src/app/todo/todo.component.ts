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

  toggleTodo(id: number) {
    this.todoService.toggleTodoCompleted(id).then((v) => {
      this.todo = v;
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).then(() => {
      this.refreshFunction();
    });
  }
}
