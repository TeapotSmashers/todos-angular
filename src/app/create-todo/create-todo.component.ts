import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodosService } from '../todos-home/todos.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  createTodoForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.minLength(10)]),
  });
  todosService: TodosService;
  @Input() refreshFunction!: () => void;

  onSubmit() {
    if (this.createTodoForm.invalid) return;
    if (!this.createTodoForm.value.title) return;

    this.todosService
      .createTodo(
        this.createTodoForm.value.title,
        this.createTodoForm.value.description ?? ``
      )
      .then((v) => {
        this.refreshFunction();
        console.log(v);
      });
    this.createTodoForm.reset();
  }

  constructor(todosService: TodosService) {
    this.todosService = todosService;
  }
}
