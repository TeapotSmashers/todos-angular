import { Component, inject } from '@angular/core';
import { Session } from '@supabase/supabase-js';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading = true;
  session: Session | null = null;
  supabaseService: SupabaseService = inject(SupabaseService);

  constructor() {
    this.loading = true;
    this.supabaseService.getSession().then((v) => {
      this.session = v;
      this.loading = false;
    });
    this.supabaseService.authChanges((_e, s) => {
      this.session = s;
    });
  }
}
