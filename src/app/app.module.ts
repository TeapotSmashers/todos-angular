import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SupabaseService } from './supabase.service';
import { TodosHomeComponent } from './todos-home/todos-home.component';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';
import { CreateTodoComponent } from './create-todo/create-todo.component';

@NgModule({
  declarations: [AppComponent, TodosHomeComponent, TodoComponent, CreateTodoComponent],
  imports: [BrowserModule, CommonModule],
  providers: [SupabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
