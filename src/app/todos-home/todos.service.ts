import { Injectable, inject } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Todo } from './todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  supabaseService: SupabaseService = inject(SupabaseService);
  constructor() {}

  async getTodos(): Promise<Todo[]> {
    const token = await this.supabaseService.getToken();

    const res = await fetch(`${environment.backendUrl}/todos`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    });

    const data = await res.json();
    let returnData: Todo[] = [];
    if (data !== null) {
      returnData = returnData.concat(data as Todo[]);
    }
    return returnData;
  }

  async createTodo(title: string, description: string): Promise<Todo> {
    const token = await this.supabaseService.getToken();

    const res = await fetch(`${environment.backendUrl}/todos`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
      }),
    });

    const data = (await res.json()) as Todo;
    return data;
  }

  async toggleTodoCompleted(id: number): Promise<Todo> {
    const token = await this.supabaseService.getToken();

    const res = await fetch(`${environment.backendUrl}/todos/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'PUT',
    });

    const data = (await res.json()) as Todo;
    return data;
  }

  async updateTodo(
    id: number,
    title: string,
    description: string,
    done: boolean
  ): Promise<Todo> {
    const token = await this.supabaseService.getToken();

    const res = await fetch(`${environment.backendUrl}/todos/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        done,
      }),
    });

    const data = (await res.json()) as Todo;
    return data;
  }

  async deleteTodo(id: number): Promise<boolean> {
    const token = await this.supabaseService.getToken();

    const res = await fetch(`${environment.backendUrl}/todos/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'DELETE',
    });

    return res.status === 200;
  }
}
