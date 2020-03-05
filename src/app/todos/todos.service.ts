import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todo[];

  constructor() {
    this.todos = [
      {
        title: 'Prepare for training',
        description: 'Actually learn how to code',
        done: false,
      },
      {
        title: 'Catch the Coronavirus',
        description: 'Get some free time off of work',
        done: true,
      }
    ];
  }

  public getTodos(): Observable<Todo[]> {
    return of(this.todos).pipe(
      delay(5000),
    );
  }

  public addTodo(todo: Todo): void {
    this.todos = [ ...this.todos, todo];
  }
}
