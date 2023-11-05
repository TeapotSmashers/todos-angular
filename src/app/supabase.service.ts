import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(
      environment.supabase.url,
      environment.supabase.key
    );
  }

  public async getUser(): Promise<User | null> {
    const response = await this.supabaseClient.auth.getUser();
    return response.data?.user ?? null;
  }

  public async getSession(): Promise<Session | null> {
    const response = await this.supabaseClient.auth.getSession();
    return response.data?.session ?? null;
  }

  public authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ): any {
    return this.supabaseClient.auth.onAuthStateChange(callback);
  }

  public signIn(): Promise<any> {
    return this.supabaseClient.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  public signOut(): Promise<any> {
    return this.supabaseClient.auth.signOut();
  }

  public async getToken(): Promise<string> {
    const session = await this.getSession();
    if (!session) {
      return '';
    } else {
      return session.access_token;
    }
  }
}
