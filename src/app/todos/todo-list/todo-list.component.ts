import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  private todos: Todo[];

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodoViaAPI($event: Todo) {
    this.todosService.addTodo($event);
    this.getTodos();
  }
}
