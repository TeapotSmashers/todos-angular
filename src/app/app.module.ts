import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SupabaseService } from './supabase.service';
import { TodosHomeComponent } from './todos-home/todos-home.component';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, TodosHomeComponent, TodoComponent],
  imports: [BrowserModule, CommonModule],
  providers: [SupabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
