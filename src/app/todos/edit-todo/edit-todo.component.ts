import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.sass'],
})
export class EditTodoComponent implements OnInit {
  @Output() public add = new EventEmitter<Todo>();

  private title: string;
  private description: string;

  constructor() {
  }

  ngOnInit() {
  }

  addTodo() {
    this.add.emit({
      title: this.title,
      description: this.description,
      done: false,
    });
  }
}
