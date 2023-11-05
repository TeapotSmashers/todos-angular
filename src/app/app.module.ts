import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SupabaseService } from './supabase.service';
import { TodosHomeComponent } from './todos-home/todos-home.component';

@NgModule({
  declarations: [AppComponent, TodosHomeComponent],
  imports: [BrowserModule],
  providers: [SupabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
