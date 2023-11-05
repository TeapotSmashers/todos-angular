import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SupabaseService } from './supabase.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [SupabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
